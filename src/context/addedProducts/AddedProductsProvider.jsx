import React, {useEffect, useMemo, useState} from 'react';
import {AddedProductsContext, LOCAL_STORAGE_ADDED_PRODUCTS_ID} from "./AddedProductsContext";



const AddedProductsProvider = ({children}) => {
    const defaultAddedProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ADDED_PRODUCTS_ID)) || [];
    const [addedProducts, setAddedProducts] = useState(defaultAddedProducts);

    useEffect(() => (
        localStorage.setItem(LOCAL_STORAGE_ADDED_PRODUCTS_ID, JSON.stringify(addedProducts))
    ), [addedProducts])

    return (
        <AddedProductsContext.Provider value={{addedProducts, setAddedProducts}}>
            {children}
        </AddedProductsContext.Provider>
    );
};

export default AddedProductsProvider;