import {Basket, BasketContext, LOCAL_STORAGE_BASKET_KEY} from "./BasketContext";
import {useContext} from "react";

export interface UseBasketResult {
    basket: Basket,
    addBasket: (price: number) => void,
    removeBasket: (price: number) => void,
    changeBasket: (newBasket: Basket) => void,
}

export function useBasket(): UseBasketResult {
    const {basket, setBasket} = useContext(BasketContext);

    const changeBasket = (newBasket: Basket) => {
        setBasket(newBasket);
        localStorage.setItem(LOCAL_STORAGE_BASKET_KEY, JSON.stringify(basket))
    }

    const addBasket = (price: number) => {
        const newBasket: Basket = {
            count: basket.count + 1,
            total: basket.total + price,
        }

        changeBasket(newBasket);
    }

    const removeBasket = (price: number) => {
        const newBasket: Basket = {
            count: basket.count - 1,
            total: basket.total - price,
        }

        changeBasket(newBasket);
    }

    return <UseBasketResult>{basket, addBasket, removeBasket, changeBasket}
}