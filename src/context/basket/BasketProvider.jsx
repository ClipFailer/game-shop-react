import {useEffect, useMemo, useState} from 'react';
import {BasketContext, LOCAL_STORAGE_BASKET_CONTEXT_KEY} from "./BasketContext";

const defaultBasket = JSON.parse(localStorage.getItem(LOCAL_STORAGE_BASKET_CONTEXT_KEY)) || {counts: 0, total: 0};

const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState(defaultBasket)

    useEffect(() => (
        localStorage.setItem(LOCAL_STORAGE_BASKET_CONTEXT_KEY, JSON.stringify(basket))
    ), [basket])

    return (
        <BasketContext.Provider value={
            {basket, setBasket}
        }>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketProvider;