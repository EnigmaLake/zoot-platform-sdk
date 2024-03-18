import Select from "react-select";
import { useEffect, useState } from "react";
import { sendSetUserCurrencyEvent } from "../../events";
import React from "react";
export const SelectMenu = ({ options, currency, }) => {
    const [selectedCurrency, setSelectedCurrency] = useState({
        ...options[currency],
    });
    useEffect(() => {
        if (currency !== selectedCurrency.label) {
            setSelectedCurrency({ ...options[currency] });
        }
    }, [currency, options, selectedCurrency.label]);
    const handleOnChange = async (currency) => {
        setSelectedCurrency(currency);
        await sendSetUserCurrencyEvent({ currency: currency.label });
        return currency.label;
    };
    return (<Select placeholder="Select Option" isClearable={false} isSearchable={false} value={selectedCurrency} defaultValue={selectedCurrency} options={Object.values(options)} isMulti={false} onChange={handleOnChange} formatOptionLabel={(option) => option.value} getOptionLabel={(option) => (<div style={{ display: "flex", alignItems: "center" }}>
          {option.value}
          <span style={{ marginLeft: 5 }}>{option.label}</span>
        </div>)}/>);
    return (<Listbox as="div" value={selectedCurrency} onChange={handleOnChange}>
      <Listbox.Button className={styles.button}>
        {selectedCurrency.icon}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Listbox.Button>
      <Listbox.Options className={styles.menu}>
        {Object.values(options).map((option) => (<Listbox.Option key={option.label} value={option} className={styles.menu_item}>
            {option.icon}
            <div className={styles.menu_name}>{option.label}</div>
          </Listbox.Option>))}
      </Listbox.Options>
    </Listbox>);
};
//# sourceMappingURL=SelectMenu.js.map