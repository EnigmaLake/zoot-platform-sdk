export const SUPPORTED_LANGUAGE_CODES = ["en", "zh-CN", "ms"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGE_CODES)[number];

export type TranslationParams = Record<string, string | number>;

export const DEFAULT_LANGUAGE = "en" as const;

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

/**
 * Locale dictionaries for a game. Only English is required: a game that has not
 * yet translated a newly supported language keeps compiling, and
 * `createTranslator` falls back per key. This is what makes adding a code to
 * `SUPPORTED_LANGUAGE_CODES` a non-breaking change for every consumer.
 */
export type LocaleDictionaries<TMessages extends Record<string, string>> = {
  en: TMessages;
} & Partial<Record<SupportedLanguage, TMessages>>;

export const createTranslator = <TMessages extends Record<string, string>>(
  dictionaries: LocaleDictionaries<TMessages>,
  language: SupportedLanguage
): Translator<Extract<keyof TMessages, string>> => {
  const dictionary = dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE];
  const fallback = dictionaries[DEFAULT_LANGUAGE];

  return (key, params) => {
    const template = dictionary[key] ?? fallback[key] ?? key;
    return interpolate(template, params);
  };
};

/**
 * Swap the `/localization/en/` segment of an asset path for the active language.
 *
 * `localizedLanguages` names the languages this asset actually has artwork for.
 * Omit it and every supported language is assumed present (the original
 * behaviour). Pass it and an untranslated language keeps the English path
 * instead of resolving to a file that does not exist — a missing texture is a
 * broken game screen, so callers shipping art for only some languages should
 * always pass it.
 */
export const localizeAssetPath = (
  path: string,
  language?: string | null,
  options?: { localizedLanguages?: readonly SupportedLanguage[] }
): string => {
  const resolved = resolveLanguage(language);
  if (resolved === DEFAULT_LANGUAGE) {
    return path;
  }
  if (
    options?.localizedLanguages &&
    !options.localizedLanguages.includes(resolved)
  ) {
    return path;
  }
  return path.replace(
    `/localization/${DEFAULT_LANGUAGE}/`,
    `/localization/${resolved}/`
  );
};
