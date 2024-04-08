# Enigma Lake Zoot - Game Integration SDK
The Enigma Lake Zoot Game Integration SDK is a TypeScript library designed to seamlessly integrate games into the Enigma Lake Zoot platform. This SDK provides developers with the necessary tools to enhance the user experience by accessing user information such as nickname, session data, and avatar, expanding or collapsing the game view, as well as utilizing Enigma Lake Zoot's currency system.

## Features
- **User Information**: Retrieve user data including nickname, session information, and avatar.
- **Currency Integration**: Utilize Enigma Lake Zoot's currency system within your game.
- **Balance Query**: Check the user's current balance of Enigma Lake Zoot's currency.
- **Currency Management**: Change the current currency being used within the game.
- **Expand/Collapse game view**: Toggle the game view.
- **Modal Triggers**: Trigger login or purchase modals to facilitate in-game transactions.

## Getting Started

To start using the Enigma Lake Zoot Game Integration SDK, follow these steps:

1. **Installation**: Install the SDK via npm:
```bash 
npm install @enigma-lake/zoot-game-integration-sdk
```

2. **Integration**: You can import the entire package using the syntax 
``` js
import * as zootSDK from '@enigma-lake/zoot-game-integration-sdk';
```
or you can import specific types, events, and methods individually, such as: 
``` js
 import { Currency } from '@enigma-lake/zoot-game-integration-sdk';
```

3. **Usage**: Utilize SDK methods to access user information and integrate Enigma Lake Zoot's features into your game.

To establish communication with the Enigma Lake Zoot platform, it is essential to listen to ZootEvent messages. This can be achieved by registering an event listener as follows:
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
    if (event.data.event_id === EVENTS.EL_GET_EXPANDED_GAME_VIEW) {
        // Handle ZootEvent for toggling game view
        // Example: do something...
    }
});
```

To facilitate these events, you can easily trigger them by calling specific methods based on your information needs:

- To retrieve the user balance, utilize the method **```getUserBalanceEvent()```**.
- For acquiring user currency information, use **```getUserCurrencyEvent()```**.
- To change the user currency, use **```setUserCurrencyEvent(data: UserCurrency)```**.
- To toggle the game view, use **```toggleGameViewEvent(data: GameExpandedView)```**.
- If you require user information such as nickname, session, or avatar, call **```getUserInformationEvent()```**.
- To initiate the purchase flow for acquiring coins, utilize **```purchaseCoinsEvent()```**.
- For triggering the login flow, use **```loginUserEvent()```**.
- If you want to request all user data and the game view at once, simply invoke the function **```requestInitData()```**.
- Alternatively, you can dispatch toast notification messages directly to the Enigma Lake Zoot client by invoking the method **```showNotificationEvent(message: Notification)```**.

#### Data Types
These data types define the events, user information, currency details, and notifications used within the Enigma Lake Zoot platform integration.

```js
enum EVENTS {
  EL_USER_BALANCE = "EL_USER_BALANCE",
  EL_GET_USER_CURRENCY = "EL_GET_USER_CURRENCY",
  EL_SET_USER_CURRENCY = "EL_SET_USER_CURRENCY",
  EL_USER_INFORMATION = "EL_USER_INFORMATION",
  EL_LOGIN_USER = "EL_LOGIN_USER",
  EL_PURCHASE_COINS = "EL_PURCHASE_COINS",
  EL_SHOW_TOAST = "EL_SHOW_TOAST",
  EL_TOGGLE_EXPAND_GAME_VIEW = "EL_TOGGLE_EXPAND_GAME_VIEW",
  EL_GET_EXPANDED_GAME_VIEW = 'EL_GET_EXPANDED_GAME_VIEW',
}

interface UserBalance {
  sweepsBalance: number;
  goldBalance: number;
}

interface UserCurrency {
  currency: Currency;
}

interface GameExpandedView {
    expanded: boolean;
}

type UserInformation = {
  id: number;
  nickname?: string;
  avatar?: string;
  accessToken: string;
};

interface Notification {
  type: "success" | "error" | "info" | "custom";
  message: string;
}

enum Currency {
  SWEEPS = "sweeps",
  GOLD = "gold",
}

type RequestDataEvent = UserBalance | UserCurrency | Notification | UserInformation | GameExpandedView ;

interface GetUserInformationEvent {
  type: EVENTS.EL_USER_INFORMATION;
  event_id: EVENTS.EL_USER_INFORMATION;
  data: UserInformation;
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


```

#### Currency Information
Enigma Lake Zoot supports two currencies: **sweeps** and **gold**. You can visually represent these coins using the CSS classes **```sweeps_icon```** for sweeps and **```gold_icon```** for gold after importing the CSS file into your root file:
```js
import '@enigma-lake/zoot-game-integration-sdk/dist/bundle.css';
```
