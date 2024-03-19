import { EVENTS, DataEvent, UserCurrency, Notification } from "./index.js";

export const sendEventResponse = async (event: EVENTS, data?: DataEvent) => {
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

export const getParticipantListEvent = async () => {
  await sendEventResponse(EVENTS.EL_PLAY_PARTICIPANTS);
};

export const getUserBulkDataEvent = async () => {
  await getUserBalanceEvent();
  await getUserCurrencyEvent();
  await getUserInformationEvent();
  await getParticipantListEvent();
};

export const showNotificationEvent = async (message: Notification) => {
  await sendEventResponse(EVENTS.EL_SHOW_TOAST, message);
};
