export enum EVENTS {
  EL_USER_BALANCE = "EL_USER_BALANCE",
  EL_GET_USER_CURRENCY = "EL_GET_USER_CURRENCY",
  EL_SET_USER_CURRENCY = "EL_SET_USER_CURRENCY",
  EL_SET_GAME_ROUND_UUID = "EL_SET_GAME_ROUND_UUID",
  EL_USER_INFORMATION = "EL_USER_INFORMATION",
  EL_LOGIN_USER = "EL_LOGIN_USER",
  EL_PURCHASE_COINS = "EL_PURCHASE_COINS",
  EL_SHOW_TOAST = "EL_SHOW_TOAST",
  EL_TOGGLE_EXPAND_GAME_VIEW = "EL_TOGGLE_EXPAND_GAME_VIEW",
  EL_GET_EXPANDED_GAME_VIEW = "EL_GET_EXPANDED_GAME_VIEW",
}

export interface UserBalance {
  sweepsBalance: number;
  goldBalance: number;
}

export interface UserCurrency {
  currency: Currency;
}

export interface GameRoundUuid {
  gameRoundUuid: string;
}

export interface GameExpandedView {
  expanded: boolean;
  isMobileView: boolean;
}

export type UserInformation = {
  id: number;
  nickname?: string;
  avatar?: string;
  accessToken: string;
};

export interface Notification {
  type: "success" | "error" | "info" | "custom";
  message: string;
}

export enum Currency {
  SWEEPS = "sweeps",
  GOLD = "gold",
}

export type RequestDataEvent =
  | UserBalance
  | UserCurrency
  | GameRoundUuid
  | Notification
  | UserInformation
  | GameExpandedView;

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

export interface GetUserBalanceEvent {
  type: EVENTS.EL_USER_BALANCE;
  event_id: EVENTS.EL_USER_BALANCE;
  data: UserBalance;
}

export interface GetGameExpandedView {
  type: EVENTS.EL_GET_EXPANDED_GAME_VIEW;
  event_id: EVENTS.EL_GET_EXPANDED_GAME_VIEW;
  data: GameExpandedView;
}
export type ZootEvent =
  | GetUserBalanceEvent
  | GetUserCurrencyEvent
  | GetUserInformationEvent
  | GameExpandedView;
