import {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router";

import './ProductPage.css';
import useFetching from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../../components/Loader/Loader";
import Category from "../../components/Category/Category";

import ReactPlayer from 'react-player/youtube';
import Button from "../../components/UI/Button/Button";
import Page from "../../components/Page/Page";
import {BasketContext} from "../../context/basket/BasketContext";
import {AddedProductsContext} from "../../context/addedProducts/AddedProductsContext";

const ProductPage = () => {
    const params = useParams();

    const [product, setProduct] = useState({});

    const {basket, setBasket} = useContext(BasketContext);
    const {addedProducts, setAddedProducts} = useContext(AddedProductsContext);

    const [fetchProduct, isProductLoading, error] = useFetching(async () => {
        const response = await PostService.getProductById(params.id);
        setProduct(response.data[0]);
    });

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <>
            {
                isProductLoading
                    ? <Loader>Загрузка страницы...</Loader>
                    :
                    <>
                        <h1 className='product-page__title'>
                            <strong>
                                {product.title}
                            </strong>
                        </h1>
                        <div className={'product-cover'}>
                            <div className="product-page">
                                <div className="product-page__left">
                                    <div>
                                        <img src={product.img} className='product-page__img' alt=""/>
                                        <div className="product-page__categories">
                                            {
                                                product.categories &&
                                                product.categories.map(category =>
                                                    <Category
                                                        inactive={true}
                                                        key={category}
                                                    >
                                                        {category}
                                                    </Category>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="product-page__purchase">
                                        <span className='product-page__price'>
                                            {product.price}руб.
                                        </span>
                                        <Button
                                            fontSize='24px'
                                            padding='10px 30px'
                                            width='100%'
                                            basketCount={basket.counts}
                                            setBasketCount={setBasket}
                                            productId={product.id}
                                            productPrice={product.price}
                                            isAdded={addedProducts.includes(product.id)}
                                        >
                                            Add to card
                                        </Button>
                                    </div>
                                </div>
                                <div className="product-page__right">
                                    <div className="product-page__trailer">
                                        {/*<h3 className='trailer-title'>*/}
                                        {/*    Game trailer*/}
                                        {/*</h3>*/}
                                        <ReactPlayer
                                            controls
                                            className="react-player"
                                            width='100%'
                                            height='100%'
                                            url={product.trailer}
                                        />

                                    </div>

                                    {/*<h3 className='product-description-title' >Game description</h3>*/}
                                    <div className="product-page__description">

                                        {
                                            product.description
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default ProductPage;