import {
  RequestDataEvent,
  EVENTS,
  UserCurrency,
  Notification,
  GameExpandedView,
} from "./types";

export const sendEventResponse = async (
  event: EVENTS,
  data?: RequestDataEvent
) => {
  if (typeof window !== "undefined") {
    const message = JSON.parse(
      JSON.stringify({
        type: event,
        event_id: event,
        data,
      })
    );
    window.top?.postMessage(message, "*");
  }
};

export const getUserBalanceEvent = async () => {
  await sendEventResponse(EVENTS.EL_USER_BALANCE);
};

export const getUserCurrencyEvent = async () => {
  await sendEventResponse(EVENTS.EL_GET_USER_CURRENCY);
};
export const sendSetUserCurrencyEvent = async (data: UserCurrency) => {
  await sendEventResponse(EVENTS.EL_SET_USER_CURRENCY, data);
};

export const getUserInformationEvent = async () => {
  await sendEventResponse(EVENTS.EL_USER_INFORMATION);
};

export const loginUserEvent = async () => {
  await sendEventResponse(EVENTS.EL_LOGIN_USER);
};

export const purchaseCoinsEvent = async () => {
  await sendEventResponse(EVENTS.EL_PURCHASE_COINS);
};

export const showNotificationEvent = async (message: Notification) => {
  await sendEventResponse(EVENTS.EL_SHOW_TOAST, message);
};

export const toggleGameViewEvent = async (data: GameExpandedView) => {
  await sendEventResponse(EVENTS.EL_TOGGLE_EXPAND_GAME_VIEW, data);
};

export const getGameViewEvent = async () => {
  await sendEventResponse(EVENTS.EL_GET_EXPANDED_GAME_VIEW);
};

export const requestInitData = async () => {
  await getUserBalanceEvent();
  await getUserCurrencyEvent();
  await getUserInformationEvent();
  await getGameViewEvent();
};
