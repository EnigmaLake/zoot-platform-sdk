export enum EVENTS {
  EL_USER_BALANCE = "EL_USER_BALANCE",
  EL_GET_USER_CURRENCY = "EL_GET_USER_CURRENCY",
  EL_SET_USER_CURRENCY = "EL_SET_USER_CURRENCY",
  EL_USER_INFORMATION = "EL_USER_INFORMATION",
  EL_LOGIN_USER = "EL_LOGIN_USER",
  EL_PURCHASE_COINS = "EL_PURCHASE_COINS",
  EL_SHOW_TOAST = "EL_SHOW_TOAST",
}

export interface UserBalance {
  sweepsBalance: number;
  goldBalance: number;
}

export interface UserCurrency {
  currency: Currency;
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
  | Notification
  | UserInformation;

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

export type ZootEvent =
  | GetUserBalanceEvent
  | GetUserCurrencyEvent
  | GetUserInformationEvent;
