import {useContext} from 'react';

import './Button.css';
import {BasketContext} from "../../../context/basket/BasketContext";
import {AddedProductsContext,} from "../../../context/addedProducts/AddedProductsContext";

const Button = ({
                    children,
                    isAdded,
                    productId, productPrice,
                    fontSize, width, height, padding,
                    ...props}) => {

    const {basket, setBasket} = useContext(BasketContext);
    const {addedProducts, setAddedProducts} = useContext(AddedProductsContext);

    const addToBasket = (event) => {
        event.preventDefault();

        setBasket({total: basket.total + productPrice, counts: basket.counts + 1});

        setAddedProducts([...addedProducts, productId]);
    }

    const removeFromBasket = (event) => {
        event.preventDefault();

        setBasket({total: basket.total - productPrice , counts: basket.counts - 1});

        const newArray = [...addedProducts].filter(item => item !== productId);
        setAddedProducts(newArray);
    }

    return (
        <button
            className={`btn ${isAdded && 'added'}`}
            onClick={isAdded ? removeFromBasket : addToBasket}
            {...props}
            style={{fontSize: fontSize, width: width, height: height, padding: padding}}
        >
            {   isAdded
                ? "Remove"
                : children
            }
        </button>
    );
};

export default Button;