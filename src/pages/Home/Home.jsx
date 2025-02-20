import {useEffect, useMemo, useState} from 'react';

import './Home.css';

import ProductsList from "../../components/ProductsList/ProductsList";
import Filter from "../../components/Filter/Filter";
import PostService from "../../API/PostService";
import Loader from "../../components/Loader/Loader";
import useFetching from "../../hooks/useFetching";

const Home = () => {

    const categories = [
        'action', 'rpg', 'adventure', 'tactical', 'survival', 'simulator', 'sandbox', 'fps', 'open world'
    ];

    const [filterCategories, setFilterCategories] = useState([]);

    const [products, setProducts] = useState([]);

    const [fetchProducts, isProductsLoading, productsError] = useFetching(async () => {
        const response = await PostService.getAllProducts();
        console.log(response.data);
        setProducts(response.data);
    })

    const sortedProducts = useMemo(() => {
        if (filterCategories.length) {
            return [...products].filter((p) => p.categories.includes(...filterCategories));
        }
        return products;

    }, [filterCategories, products]);

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="home">
            <Filter
                categories={categories}
                filterCategories={filterCategories}
                setFilterCategories={setFilterCategories}
            />
            {
                isProductsLoading ?
                    <Loader>
                        Загрузка страницы...
                    </Loader>
                    :
                    <ProductsList
                        products={sortedProducts}
                    />
            }
        </div>
    );
};

export default Home;