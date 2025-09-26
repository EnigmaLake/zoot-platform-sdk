import {
  RequestDataEvent,
  EVENTS,
  UserCurrency,
  Notification,
  GameExpandedView,
  GameRoundUuid,
  PlayOutcomePayload,
  GameRoundState,
  GameRoundVideoUrl,
  UserCurrencyV2,
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
    window.parent?.postMessage(message, "*");
  }
};

export const getUserBalanceEvent = async () => {
  await sendEventResponse(EVENTS.EL_USER_BALANCE);
};

export const getUserBalanceEventV2 = async () => {
  await sendEventResponse(EVENTS.EL_USER_BALANCE_V2);
};

export const getUserCurrencyEvent = async () => {
  await sendEventResponse(EVENTS.EL_GET_USER_CURRENCY);
};

export const getUserCurrencyEventV2 = async () => {
  await sendEventResponse(EVENTS.EL_GET_USER_CURRENCY_V2);
};

export const sendSetPlinkoBallsAreDroppingEvent = async ({
  status,
}: {
  status: boolean;
}) => {
  await sendEventResponse(EVENTS.EL_SET_PLINKO_BALLS_ARE_DROPPING, { status });
};

export const sendSetAllPlinkoBallsDroppedEvent = async ({
  status,
}: {
  status: boolean;
}) => {
  await sendEventResponse(EVENTS.EL_SET_ALL_PLINKO_BALLS_DROPPED, { status });
};

export const sendSetUserCurrencyEvent = async (data: UserCurrency) => {
  await sendEventResponse(EVENTS.EL_SET_USER_CURRENCY, data);
};

export const sendSetUserCurrencyEventV2 = async (data: UserCurrencyV2) => {
  await sendEventResponse(EVENTS.EL_SET_USER_CURRENCY_V2, data);
};

export const sendSetGameRoundUuidEvent = async (data: GameRoundUuid) => {
  await sendEventResponse(EVENTS.EL_SET_GAME_ROUND_UUID, data);
};

export const sendSetGameRoundStateEvent = async (data: GameRoundState) => {
  await sendEventResponse(EVENTS.EL_SET_GAME_ROUND_STATE, data);
};

export const sendSetGameRoundVideoUrlEvent = async (
  data: GameRoundVideoUrl
) => {
  await sendEventResponse(EVENTS.EL_SET_GAME_ROUND_VIDEO_URL, data);
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

export const sendOpenStoreEvent = async () => {
  await sendEventResponse(EVENTS.EL_OPEN_STORE);
};

export const notifyWithPlayOutcome = async (payload: PlayOutcomePayload) => {
  await sendEventResponse(EVENTS.EL_SHOW_PLAY_OUTCOME, payload);
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

export const getPlayLimitsEvent = async () => {
  await sendEventResponse(EVENTS.EL_GET_PLAY_LIMITS);
};

export const getPlayLimitsEventV2 = async () => {
  await sendEventResponse(EVENTS.EL_GET_PLAY_LIMITS_V2);
};

export const setToggleGameWidgets = async () => {
  await sendEventResponse(EVENTS.EL_SET_TOGGLE_WIDGETS);
};

export const requestInitData = async () => {
  await getUserBalanceEvent();
  await getUserBalanceEventV2();
  await getUserCurrencyEvent();
  await getUserCurrencyEventV2();
  await getUserInformationEvent();
  await getGameViewEvent();
  await getPlayLimitsEvent();
  await getPlayLimitsEventV2();
};
