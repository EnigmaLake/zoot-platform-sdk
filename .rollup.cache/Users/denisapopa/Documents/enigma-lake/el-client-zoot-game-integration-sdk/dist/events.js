import { EVENTS } from ".";
export const sendEventResponse = async (event, data) => {
    if (typeof window !== "undefined") {
        const message = JSON.parse(JSON.stringify({
            type: event,
            event_id: event,
            data,
        }));
        window.top?.postMessage(message, "*");
    }
};
export const getUserBalanceEvent = async () => {
    await sendEventResponse(EVENTS.EL_USER_BALANCE);
};
export const getUserCurrencyEvent = async () => {
    await sendEventResponse(EVENTS.EL_GET_USER_CURRENCY);
};
export const sendSetUserCurrencyEvent = async (data) => {
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
export const showNotificationEvent = async (message) => {
    await sendEventResponse(EVENTS.EL_SHOW_TOAST, message);
};
//# sourceMappingURL=events.js.map