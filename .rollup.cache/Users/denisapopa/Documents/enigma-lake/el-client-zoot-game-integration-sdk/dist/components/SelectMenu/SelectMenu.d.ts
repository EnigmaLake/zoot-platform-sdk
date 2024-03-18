import { ReactNode } from "react";
import { Currency } from "../..";
import React from "react";
export declare const SelectMenu: ({ options, currency, }: {
    options: {
        sweeps: {
            value: ReactNode;
            label: Currency;
        };
        gold: {
            value: ReactNode;
            label: Currency;
        };
    };
    currency: Currency;
}) => React.JSX.Element;
