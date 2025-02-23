import {FC, ReactNode} from 'react';

import ThemeProvider from "../../contexts/ThemeContext/ThemeProvider";
import BasketProvider from "../../contexts/BasketContext/BasketProvider";
import AddedProductsProvider from "../../contexts/AddedProductsContext/AddedProductsProvider";

export interface ContextProps {
    children: ReactNode;
}

const Context: FC<ContextProps> = ({children}: ContextProps) => {
    return (
        <BasketProvider>
            <AddedProductsProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </AddedProductsProvider>
        </BasketProvider>
    );
};

export default Context;