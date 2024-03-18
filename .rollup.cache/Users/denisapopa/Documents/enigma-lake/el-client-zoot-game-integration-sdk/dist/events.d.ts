import { DataEvent, EVENTS, Notification, UserCurrency } from ".";
export declare const sendEventResponse: (event: EVENTS, data?: DataEvent) => Promise<void>;
export declare const getUserBalanceEvent: () => Promise<void>;
export declare const getUserCurrencyEvent: () => Promise<void>;
export declare const sendSetUserCurrencyEvent: (data: UserCurrency) => Promise<void>;
export declare const getUserInformationEvent: () => Promise<void>;
export declare const loginUserEvent: () => Promise<void>;
export declare const purchaseCoinsEvent: () => Promise<void>;
export declare const getParticipantListEvent: () => Promise<void>;
export declare const getUserBulkDataEvent: () => Promise<void>;
export declare const showNotificationEvent: (message: Notification) => Promise<void>;