import { Currency } from ".";
export declare const getCurrentBalance: ({ balance, currency, }: {
    balance: {
        sweepsBalance: number;
        goldBalance: number;
    };
    currency: Currency;
}) => number;
