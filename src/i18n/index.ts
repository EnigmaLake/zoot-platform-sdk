export const SUPPORTED_LANGUAGE_CODES = ["en", "zh-CN"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGE_CODES)[number];

export type TranslationParams = Record<string, string | number>;

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

export const SUPPORTED_LANGUAGES: readonly SupportedLanguage[] =
  SUPPORTED_LANGUAGE_CODES;

export const resolveLanguage = (input?: string | null): SupportedLanguage => {
  if (!input) {
    return DEFAULT_LANGUAGE;
  }

  const normalized = input.trim().toLowerCase();
  if (!normalized) {
    return DEFAULT_LANGUAGE;
  }

  const exact = SUPPORTED_LANGUAGES.find(
    (code) => code.toLowerCase() === normalized
  );
  if (exact) {
    return exact;
  }

  const primary = normalized.split("-")[0];
  const byPrimary = SUPPORTED_LANGUAGES.find(
    (code) => code.toLowerCase().split("-")[0] === primary
  );

  return byPrimary ?? DEFAULT_LANGUAGE;
};

const interpolate = (template: string, params?: TranslationParams): string => {
  if (!params) {
    return template;
  }
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in params ? String(params[key]) : match
  );
};

export type Translator<TKey extends string = string> = (
  key: TKey,
  params?: TranslationParams
) => string;

export const createTranslator = <TMessages extends Record<string, string>>(
  dictionaries: Record<SupportedLanguage, TMessages>,
  language: SupportedLanguage
): Translator<Extract<keyof TMessages, string>> => {
  const dictionary = dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE];
  const fallback = dictionaries[DEFAULT_LANGUAGE];

  return (key, params) => {
    const template = dictionary[key] ?? fallback[key] ?? key;
    return interpolate(template, params);
  };
};

export const localizeAssetPath = (
  path: string,
  language?: string | null
): string => {
  const resolved = resolveLanguage(language);
  return resolved === DEFAULT_LANGUAGE
    ? path
    : path.replace(
        `/localization/${DEFAULT_LANGUAGE}/`,
        `/localization/${resolved}/`
      );
};
