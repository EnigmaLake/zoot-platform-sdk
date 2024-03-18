export * as events from "./events";
export * as utils from "./utils";
export var EVENTS;
(function (EVENTS) {
    EVENTS["EL_USER_BALANCE"] = "EL_USER_BALANCE";
    EVENTS["EL_GET_USER_CURRENCY"] = "EL_GET_USER_CURRENCY";
    EVENTS["EL_SET_USER_CURRENCY"] = "EL_SET_USER_CURRENCY";
    EVENTS["EL_USER_INFORMATION"] = "EL_USER_INFORMATION";
    EVENTS["EL_PLAY_PARTICIPANTS"] = "EL_PLAY_PARTICIPANTS";
    EVENTS["EL_LOGIN_USER"] = "EL_LOGIN_USER";
    EVENTS["EL_PURCHASE_COINS"] = "EL_PURCHASE_COINS";
    EVENTS["EL_SHOW_TOAST"] = "EL_SHOW_TOAST";
})(EVENTS || (EVENTS = {}));
export var Currency;
(function (Currency) {
    Currency["SWEEPS"] = "sweeps";
    Currency["GOLD"] = "gold";
})(Currency || (Currency = {}));
//# sourceMappingURL=index.js.map