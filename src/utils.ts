import { Currency } from "./types";

export const getCurrentBalance = ({
  balance,
  currency,
}: {
  balance: {
    sweepsBalance: number;
    goldBalance: number;
  };
  currency: Currency;
}) => {
  return currency === Currency.GOLD
    ? balance?.goldBalance ?? 0
    : balance?.sweepsBalance ?? 0;
};
