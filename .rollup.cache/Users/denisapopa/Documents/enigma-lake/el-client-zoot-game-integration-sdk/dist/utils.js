import { Currency } from ".";
export const getCurrentBalance = ({ balance, currency, }) => {
    return currency === Currency.GOLD
        ? balance?.goldBalance ?? 0
        : balance?.sweepsBalance ?? 0;
};
//# sourceMappingURL=utils.js.map