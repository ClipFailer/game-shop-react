import React, {MouseEventHandler, MouseEvent, useState} from 'react';

import styles from './ProductItem.module.scss';
import {useBasket} from "../../contexts/BasketContext/useBasket";
import {useAddedProducts} from "../../contexts/AddedProductsContext/useAddedProducts";
import {Link} from "react-router-dom";
import PurchaseBtn from "../PurchaseBtn/PurchaseBtn";
import RemoveBtn from "../RemoveBtn/RemoveBtn";

export interface Product {
    id?: string;
    title?: string;
    description?: string;
    trailer?: string;
    img?: string;
    price?: string;
}

export interface ProductItemProps{
    product: Product;
}

const ProductItem = ({product}: ProductItemProps) => {

    const {addBasket, removeBasket} = useBasket();
    const {removeProduct, addProduct} = useAddedProducts()
    const {addedProductsID} = useAddedProducts()

    const [isAdded, setIsAdded] = useState(addedProductsID.includes(+product.id));

    const clickHandler= (e: React.MouseEvent<HTMLButtonElement>, price: string, id: string) => {
        e.preventDefault();

        if (!isAdded) {
            addBasket(+price)
            addProduct(+id)
            setIsAdded(true)
        } else {
            removeBasket(+price)
            removeProduct(+id)
            setIsAdded(false)
        }
    }

    return (
        <Link to={`/products/${product.id}`} className={styles.productItem}>
            <div className={styles.info}>
                <img src={product.img} alt="" className={styles.img}/>
                <h2 className={styles.title}>{product.title}</h2>
            </div>

            { isAdded
                ?
                <RemoveBtn text={'Убрать'}
                           onClick={(e) => clickHandler(e, product.price, product.id)}
                />
                :
                <PurchaseBtn
                    price={product.price}
                    text={'Добавить'}
                    onClick={(e) => clickHandler(e, product.price, product.id)}
                />
            }
        </Link>
    );
};

export default ProductItem;