import React, {FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {AddedProductsContext, LOCAL_STORAGE_ADDED_PRODUCTS_KEY} from "./AddedProductsContext";

export interface AddedProductsProviderProps {
    children: ReactNode;
}

const defaultAddedProducts: number[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ADDED_PRODUCTS_KEY)) || []

const AddedProductsProvider: FC<AddedProductsProviderProps> = ({children}: AddedProductsProviderProps) => {

    const [addedProductsID, setAddedProductsID] = useState<number[]>(defaultAddedProducts);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_ADDED_PRODUCTS_KEY, JSON.stringify(addedProductsID));
    }, []);

    return (
        <AddedProductsContext.Provider value={{
            addedProductsID, setAddedProductsID,
        }}>
            {children}
        </AddedProductsContext.Provider>
    );
};

export default AddedProductsProvider;