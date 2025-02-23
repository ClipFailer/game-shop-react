import {createContext} from "react";

export interface Basket {
    count: number;
    total: number;
}

export interface BasketContextProps {
    basket?: Basket,
    setBasket?: (newBasket: Basket) => void;
}

export const BasketContext = createContext<BasketContextProps>({})

export const LOCAL_STORAGE_BASKET_KEY = 'basket';