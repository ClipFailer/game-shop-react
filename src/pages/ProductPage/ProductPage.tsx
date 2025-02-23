import React, {useEffect, useState} from 'react';

import styles from './ProductPage.module.scss';
import {useParams} from "react-router-dom";
import Container from "../../components/Container/Container";
import {Product} from "../../components/ProductItem/ProductItem";
import PostService from "../../API/PostService";
import PurchaseBtn from "../../components/PurchaseBtn/PurchaseBtn";
import ReactPlayer from "react-player";
import {useBasket} from "../../contexts/BasketContext/useBasket";
import RemoveBtn from "../../components/RemoveBtn/RemoveBtn";
import {useAddedProducts} from "../../contexts/AddedProductsContext/useAddedProducts";

const ProductPage = () => {

    const params = useParams();

    const [product, setProduct] = useState<Product>({});
    const {addBasket, removeBasket} = useBasket()
    const {addedProductsID, addProduct, removeProduct} = useAddedProducts()

    const [isAdded, setIsAdded] = useState<boolean>(addedProductsID.includes(+params.id));

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const response = await PostService.getProductByID(params.id);
        setProduct(response);
    }

    const clickHandler = () => {
        if (!isAdded) {
            addBasket(+product.price)
            setIsAdded(true);
            addProduct(+product.id)
        } else {
            removeBasket(+product.price)
            removeProduct(+product.id)
            setIsAdded(false);
        }
    }



    return (
        <Container>
            <div className={styles.cover}>
                <h1 className={styles.title}>
                    {product.title}
                </h1>
                <div className={styles.productPage}>
                    <div className={styles.left}>
                        <img src={product.img} alt="" className={styles.img}/>
                        { !isAdded
                            ? <PurchaseBtn price={product.price} text={'Добавить'} onClick={clickHandler}/>
                            : <RemoveBtn price={product.price} text={'Убрать'} onClick={clickHandler}/>
                        }
                    </div>
                    <div className={styles.right}>
                        <div className={styles.trailer}>
                            <ReactPlayer url={product.trailer}
                                         width='100%' height={'100%'} controls
                            />
                        </div>
                        <div className={styles.description}>
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductPage;