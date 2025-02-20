import React, {useContext, useEffect, useState} from 'react';

import '../../components/UI/Button/Button.css'
import './Basket.css';

import PostService from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router";
import Modal from "../../components/Modal/Modal";
import {BasketContext} from "../../context/basket/BasketContext";
import {AddedProductsContext} from "../../context/addedProducts/AddedProductsContext";

const Basket = () => {

    const {basket, setBasket} = useContext(BasketContext);
    const {addedProducts, setAddedProducts} = useContext(AddedProductsContext);

    const [products, setProducts] = useState([]);
    const [isPurchaseModalActive, setIsPurchaseModalActive] = useState(false);

    const [fetchAddedProducts, isLoading, error] = useFetching(async () => {
        const response = await PostService.getProductsById(addedProducts);
        setProducts(response);
    });

    useEffect( () => {
        fetchAddedProducts();
    }, [addedProducts])

    const removeProduct = (id, price) => {
        const newProducts = [...addedProducts].filter((productId) => id !== productId);
        setAddedProducts(newProducts);
        setBasket({ counts: basket.counts - 1, total: basket.total - price} )
    }

    const removeAllProducts = () => {
        setAddedProducts([]);
        setBasket({ counts: 0, total: 0 });
    }

    const closeModal = () => {
        setIsPurchaseModalActive(false);
        removeAllProducts();
    }

    return (
        <>
            {
                isLoading
                    ? <Loader>Загрузка страницы...</Loader>
                    :
                    addedProducts.length <= 0
                        ?
                        <h1 style={{textAlign: 'center'}}>Your shopping list is empty</h1>
                        :
                        <>
                            <h1 className='basket-page__title'>Shopping basket</h1>
                            <div className="basket-page">

                                <div className="basket-products">
                                    {
                                        products.map((product) =>
                                            <div key={product.id}>
                                                {
                                                    <div className='basket-page__product'>
                                                        <Link to={`/products/${product.id}`}>
                                                            <img src={product.img} className='purchase__img' alt=""/>
                                                        </Link>
                                                        <div className={'product-info'}>
                                                            <h2 className={'basket-product-title'}>{product.title}</h2>
                                                            <h3 className='purchase__price'>Price <span className='purchase-list__price'>{product.price}&#8381;</span></h3>
                                                        </div>
                                                        <button
                                                            className='btn btn-clear'
                                                            onClick={() => removeProduct(product.id, product.price)}
                                                        >
                                                            remove
                                                        </button>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="basket-page__purchase">
                                    <div className='purchase__left'>
                                        <h2 className='purchase__price'>Total amount: <span className={'purchase-list__price'}>{basket.total}&#8381;</span></h2>
                                        <h2>Number of products: <span className={'purchase-counts'}>{basket.counts}</span></h2>
                                    </div>
                                    <div className='purchase__right'>
                                        <button
                                            className='btn btn-purchase'
                                            onClick={() => setIsPurchaseModalActive(!isPurchaseModalActive)}
                                        >
                                            Purchase
                                        </button>
                                        <button
                                            className='btn btn-clear'
                                            onClick={removeAllProducts}
                                        >
                                            Clear card
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {
                                isPurchaseModalActive &&
                                    <Modal>
                                        <div>
                                            <h1 className='modal-title'>
                                                Thanks for the purchase!
                                            </h1>
                                            <h2 className='modal-subtitle'>
                                                You have bought the following games:
                                            </h2>
                                            <ul className='purchase-list'>
                                                {
                                                    products.map((product) =>
                                                        <li key={product.id}>
                                                            <span className='purchase-list__title'>
                                                                {product.title}
                                                            </span>
                                                            <span className='purchase-list__price'>
                                                                {product.price}&#8381;
                                                            </span>
                                                        </li>)
                                                }
                                            </ul>
                                            <h2>
                                                Total: <span className='purchase-list__price'>{basket.total}&#8381;</span>
                                            </h2>
                                        </div>
                                        <button
                                            className='close-modal-btn'
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </Modal>
                            }
                        </>
            }
        </>
    );
};

export default Basket;