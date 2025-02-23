import React, {useEffect, useState} from 'react';
import Container from "../../components/Container/Container";

import styles from './MainPage.module.scss';
import ProductsList from "../../components/ProductsList/ProductsList";
import useFetching from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import {Product} from "../../components/ProductItem/ProductItem";

const MainPage = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const response = await PostService.getAllProducts();
        setProducts(response);
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Container>
            <div className={styles.mainPage}>
                <ProductsList products={products}/>
            </div>
        </Container>
    );
};

export default MainPage;