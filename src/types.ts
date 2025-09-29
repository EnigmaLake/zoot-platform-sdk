export enum EVENTS {
  EL_USER_BALANCE = "EL_USER_BALANCE",
  EL_USER_BALANCE_V2 = "EL_USER_BALANCE_V2",
  EL_GET_USER_CURRENCY = "EL_GET_USER_CURRENCY",
  EL_GET_USER_CURRENCY_V2 = "EL_GET_USER_CURRENCY_V2",
  EL_SET_USER_CURRENCY = "EL_SET_USER_CURRENCY",
  EL_SET_USER_CURRENCY_V2 = "EL_SET_USER_CURRENCY_V2",
  EL_SET_GAME_ROUND_UUID = "EL_SET_GAME_ROUND_UUID",
  EL_SET_GAME_ROUND_STATE = "EL_SET_GAME_ROUND_STATE",
  EL_SET_GAME_ROUND_VIDEO_URL = "EL_SET_GAME_ROUND_VIDEO_URL",
  EL_USER_INFORMATION = "EL_USER_INFORMATION",
  EL_LOGIN_USER = "EL_LOGIN_USER",
  EL_PURCHASE_COINS = "EL_PURCHASE_COINS",
  EL_OPEN_STORE = "EL_OPEN_STORE",
  EL_SHOW_TOAST = "EL_SHOW_TOAST",
  EL_TOGGLE_EXPAND_GAME_VIEW = "EL_TOGGLE_EXPAND_GAME_VIEW",
  EL_GET_EXPANDED_GAME_VIEW = "EL_GET_EXPANDED_GAME_VIEW",
  EL_SHOW_PLAY_OUTCOME = "EL_SHOW_PLAY_OUTCOME",
  EL_GET_PLAY_LIMITS = "EL_GET_PLAY_LIMITS",
  EL_GET_PLAY_LIMITS_V2 = "EL_GET_PLAY_LIMITS_v2",
  EL_SET_PLAY_LIMITS = "EL_SET_PLAY_LIMITS",
  EL_SET_PLAY_LIMITS_V2 = "EL_SET_PLAY_LIMITS_V2",
  EL_SET_TOGGLE_WIDGETS = "EL_SET_TOGGLE_WIDGETS",
  EL_GET_TOGGLE_WIDGETS = "EL_GET_TOGGLE_WIDGETS",
  EL_SET_PLINKO_BALLS_ARE_DROPPING = "EL_SET_PLINKO_BALLS_ARE_DROPPING",
  EL_SET_ALL_PLINKO_BALLS_DROPPED = "EL_SET_ALL_PLINKO_BALLS_DROPPED",
}

export interface UserBalance {
  sweepsBalance: number;
  goldBalance: number;
}

export type UserBalanceV2 = Record<Currency, number>;

export interface UserCurrency {
  currency: Currency;
}

export type CurrencyProps = {
  current: CurrencyMeta;
  available: CurrencyMeta[];
};

export type CurrencyIcon = React.ComponentType<{ className?: string }>;

export type CurrencyMeta = {
  code: Currency;
  label: string;
  abbr: string;
  icon?: CurrencyIcon;
  decimals: number;
  possibleWin?: number;
};

export interface UserCurrencyV2 {
  current: CurrencyMeta;
  available: CurrencyMeta[];
}

export interface GameRoundUuid {
  gameRoundUuid: string;
}

export enum GameRoundStates {
  EMPTY = "EMPTY",
  PREPARED = "PREPARED",
  LIVE = "LIVE",
  COMPLETED = "COMPLETED",
}

export interface GameRoundVideoUrl {
  videoUrl?: string;
  betAmount?: number;
  winAmount?: number;
  winMultiplier?: string;
  isPostRecordProcessing?: boolean;
}

export interface GameRoundState {
  state: GameRoundStates;
}

export interface GameExpandedView {
  expanded: boolean;
  isMobileView: boolean;
}

export interface PlinkoBallsDroppingStatus {
  status: boolean;
}

export interface PlayLimitConfig {
  limits: {
    min: number;
    max: number;
  };
  defaultValues: number[];
}

export type PlayLimits = Record<Currency, PlayLimitConfig>;

export interface PlayLimitConfigV2 {
  limits: {
    min: number;
    max: number;
    default: number;
  };
  maxExposure?: number;
  defaultBetOptions: number[];
}

export type PlayLimitsV2 = Record<Currency, PlayLimitConfigV2>;

export type UserInformation = {
  id: number;
  nickname?: string;
  avatar?: string;
  accessToken: string;
  tenantId?: number;
  operatorId?: number;
  currency?: string;
};

export interface Notification {
  type: "success" | "error" | "info" | "custom";
  message: string;
}

export enum Currency {
  SWEEPS = "sweeps",
  GOLD = "gold",
}

export interface PlayOutcomePayload {
  winMultiplier: number;
  playAmount: number;
  currency: Currency;
}

export type RequestDataEvent =
  | UserBalance
  | UserBalanceV2
  | UserCurrency
  | UserCurrencyV2
  | GameRoundUuid
  | GameRoundState
  | Notification
  | UserInformation
  | GameExpandedView
  | GameRoundVideoUrl
  | PlayLimits
  | PlayLimitsV2
  | PlinkoBallsDroppingStatus;

export interface GetUserInformationEvent {
  type: EVENTS.EL_USER_INFORMATION;
  event_id: EVENTS.EL_USER_INFORMATION;
  data: UserInformation;
}

export interface GetUserCurrencyEvent {
  type: EVENTS.EL_GET_USER_CURRENCY;
  event_id: EVENTS.EL_GET_USER_CURRENCY;
  data: UserCurrency;
}
export interface GetUserCurrencyEventV2 {
  type: EVENTS.EL_GET_USER_CURRENCY_V2;
  event_id: EVENTS.EL_GET_USER_CURRENCY_V2;
  data: UserCurrencyV2;
}

export interface GetUserBalanceEvent {
  type: EVENTS.EL_USER_BALANCE;
  event_id: EVENTS.EL_USER_BALANCE;
  data: UserBalance;
}
export interface GetUserBalanceEventV2 {
  type: EVENTS.EL_USER_BALANCE_V2;
  event_id: EVENTS.EL_USER_BALANCE_V2;
  data: UserBalanceV2;
}

export interface GetGameExpandedView {
  type: EVENTS.EL_GET_EXPANDED_GAME_VIEW;
  event_id: EVENTS.EL_GET_EXPANDED_GAME_VIEW;
  data: GameExpandedView;
}

export interface GetPlayLimitsEvents {
  type: EVENTS.EL_SET_PLAY_LIMITS;
  event_id: EVENTS.EL_SET_PLAY_LIMITS;
  data: PlayLimits;
}

export interface GetPlayLimitsEventsV2 {
  type: EVENTS.EL_SET_PLAY_LIMITS_V2;
  event_id: EVENTS.EL_SET_PLAY_LIMITS_V2;
  data: PlayLimitsV2;
}

export type ZootEvent =
  | GetUserBalanceEvent
  | GetUserBalanceEventV2
  | GetUserCurrencyEvent
  | GetUserCurrencyEventV2
  | GetUserInformationEvent
  | GetGameExpandedView
  | GetPlayLimitsEvents
  | GetPlayLimitsEventsV2;
