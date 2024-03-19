# Enigma Lake Zoot - Game Integration SDK
The Enigma Lake Zoot Game Integration SDK is a TypeScript library designed to seamlessly integrate games into the Enigma Lake Zoot platform. This SDK provides developers with the necessary tools to enhance user experience by accessing user information such as username, session data, and avatar, as well as utilizing Enigma Lake Zoot's currency system.

## Features
- **User Information**: Retrieve user data including username, session information, and avatar.
- **Currency Integration**: Utilize Enigma Lake Zoot's currency system within your game.
- **Balance Query**: Check the user's current balance of Enigma Lake Zoot's currency.
- **Currency Management**: Change the current currency being used within the game.
- **Modal Triggers**: Trigger login or purchase modals to facilitate in-game transactions.

## Getting Started

To start using the Enigma Lake Zoot Game Integration SDK, follow these steps:

1. **Installation**: Install the SDK via npm:
```bash 
npm install @enigma-lake/zoot-game-integrations-sdk
```

2. **Integration**: You can import the entire package using the syntax 
``` js
import zootSDK from '@enigma-lake/zoot-game-integration-sdk';
```
or you can import specific types, events, and methods individually, such as: 
``` js
 import { Currency } from '@enigma-lake/zoot-game-integration-sdk';
```

3. **Usage**: Utilize SDK methods to access user information and integrate Enigma Lake Zoot's features into your game.

To establish communication with the Enigma Lake Zoot platform, it's essential to listen for ZootEvent messages. This can be achieved by registering an event listener like the following:
```js
window.addEventListener('message', (event: MessageEvent<ZootEvent>) => {
    if (event.data.event_id === EVENTS.EL_GET_USER_CURRENCY) {
        // Handle ZootEvent for retrieving user currency
        // Example: do something...
    }
    if (event.data.event_id === EVENTS.EL_USER_BALANCE) {
        // Handle ZootEvent for user balance information
        // Example: do something...
    }
    if (event.data.event_id === EVENTS.EL_USER_INFORMATION) {
        // Handle ZootEvent for user information retrieval
        // Example: do something...
    }
});
```

To facilitate these events, you can easily trigger them by calling specific methods based on your information needs:

- To retrieve the user balance, utilize the method **```getUserBalanceEvent()```**.
- For acquiring user currency information, employ **```getUserCurrencyEvent()```**.
- If you require user information such as username, session, or avatar, call **```getUserInformationEvent()```**.
- To initiate the purchase flow for acquiring coins, utilize **```purchaseCoinsEvent()```**.
- For triggering the login flow, use **````loginUserEvent()```**.
- If you want to request all user data at once, simply invoke the function **```requestInitData()```**.
- Alternatively, you can dispatch toast notification messages directly to the Enigma Lake Zoot client by invoking the method **```showNotificationEvent(message: Notification)```**.

#### Data Types
These data types define the events, user information, currency details, and notifications used within the Enigma Lake Zoot platform integration.

```js
export declare enum EVENTS {
    EL_USER_BALANCE = "EL_USER_BALANCE",
    EL_GET_USER_CURRENCY = "EL_GET_USER_CURRENCY",
    EL_SET_USER_CURRENCY = "EL_SET_USER_CURRENCY",
    EL_USER_INFORMATION = "EL_USER_INFORMATION",
    EL_PLAY_PARTICIPANTS = "EL_PLAY_PARTICIPANTS",
    EL_LOGIN_USER = "EL_LOGIN_USER",
    EL_PURCHASE_COINS = "EL_PURCHASE_COINS",
    EL_SHOW_TOAST = "EL_SHOW_TOAST"
}

export interface UserBalance {
    sweepsBalance: number;
    goldBalance: number;
}

export interface UserCurrency {
    currency: Currency;
}

export type User = {
    id: number;
    nickname: string;
    avatar: string;
    accessToken: string;
};

export interface Notification {
    type: "success" | "error" | "info" | "custom";
    message: string;
}

export declare enum Currency {
    SWEEPS = "sweeps",
    GOLD = "gold"
}

export type DataEvent = UserBalance | UserCurrency | Notification;

interface GetUserInformationEvent {
    type: EVENTS.EL_USER_INFORMATION;
    event_id: EVENTS.EL_USER_INFORMATION;
    data: User;
}

interface GetUserCurrencyEvent {
    type: EVENTS.EL_GET_USER_CURRENCY;
    event_id: EVENTS.EL_GET_USER_CURRENCY;
    data: UserCurrency;
}

interface GetUserBalanceEvent {
    type: EVENTS.EL_USER_BALANCE;
    event_id: EVENTS.EL_USER_BALANCE;
    data: UserBalance;
}

export type ZootEvent = GetUserBalanceEvent | GetUserCurrencyEvent | GetUserInformationEvent;

```

#### Currency Information
Enigma Lake Zoot supports two currencies: **sweeps** and **gold**. You can visually represent these coins using the CSS classes **```sweeps_icon```** for sweeps and **```gold_icon```** for gold.