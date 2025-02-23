import React, {FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {Basket, BasketContext, LOCAL_STORAGE_BASKET_KEY} from './BasketContext';
import {useAddedProducts} from "../AddedProductsContext/useAddedProducts";
import {useBasket} from "./useBasket";

const dafaultBasket = JSON.parse(localStorage.getItem(LOCAL_STORAGE_BASKET_KEY)) as Basket || {count: 0, total: 0} as Basket;

export interface BasketProviderProps {
    children: ReactNode;
}

const BasketProvider:FC<BasketProviderProps> = ({children}: BasketProviderProps) => {
    const [basket, setBasket] = useState<Basket>(dafaultBasket);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_BASKET_KEY, JSON.stringify(basket))
    }, [basket]);

    return (
        <BasketContext.Provider value={{
            basket, setBasket
        }}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketProvider;