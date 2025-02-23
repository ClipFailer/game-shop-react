import {Product} from "../../components/ProductItem/ProductItem";
import {AddedProductsContext, LOCAL_STORAGE_ADDED_PRODUCTS_KEY} from "./AddedProductsContext";
import {useContext} from "react";

export interface AddedProductsResult {
    addedProductsID: number[];
    addProduct: (id: number) => void;
    removeProduct: (id: number) => void;
    changeAddedProducts: (newProducts: number[]) => void;
}

export function useAddedProducts(): AddedProductsResult {
    const {addedProductsID, setAddedProductsID} = useContext(AddedProductsContext);

    const addProduct = (id: number) => {
        changeAddedProducts([...addedProductsID, id]);
    }

    const removeProduct = (id: number) => {
        changeAddedProducts([...addedProductsID].filter(i => id !== i));
    }

    const changeAddedProducts = (newProducts: number[]) => {
        setAddedProductsID(newProducts);
        localStorage.setItem(LOCAL_STORAGE_ADDED_PRODUCTS_KEY, JSON.stringify(newProducts));
    }

    return {addedProductsID, addProduct, removeProduct, changeAddedProducts};
}