import {createContext} from "react";
import {Product} from "../../components/ProductItem/ProductItem";

export interface AddedProductsContextProps {
    addedProductsID?: number[],
    setAddedProductsID?: (products: number[]) => void;
}

export const AddedProductsContext = createContext<AddedProductsContextProps>({})

export const LOCAL_STORAGE_ADDED_PRODUCTS_KEY = "addedProducts";