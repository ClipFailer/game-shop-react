import React from 'react';
import BasketProvider from "../context/basket/BasketProvider";
import AddedProductsProvider from "../context/addedProducts/AddedProductsProvider";
import ThemeProvider from "../context/ThemeContext/ThemeProvider";

const Contexts = ({children}) => {
    return (
        <AddedProductsProvider>
            <BasketProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </BasketProvider>
        </AddedProductsProvider>
    );
};

export default Contexts;