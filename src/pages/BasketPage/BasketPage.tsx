import React, {useEffect, useState} from 'react';

import styles from './BasketPage.module.scss';
import Container from "../../components/Container/Container";
import {useBasket} from "../../contexts/BasketContext/useBasket";
import PurchaseBtn from "../../components/PurchaseBtn/PurchaseBtn";
import RemoveBtn from "../../components/RemoveBtn/RemoveBtn";
import Modal from "../../components/Modal/Modal";
import {useAddedProducts} from "../../contexts/AddedProductsContext/useAddedProducts";
import {Product} from "../../components/ProductItem/ProductItem";
import useFetching from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import {Link} from "react-router-dom";

const BasketPage = () => {

    const {basket, changeBasket, removeBasket} = useBasket()
    const {addedProductsID, changeAddedProducts, removeProduct} = useAddedProducts()

    const [isModale, setIsModale] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
    }, [addedProductsID])

    const [fetchProducts, isLoading, error] = useFetching( async () => {
        const response = await PostService.getAddedProducts(addedProductsID)
        setProducts(response)
    })

    const clearBasket = () => {
        changeBasket({total: 0, count: 0})
        changeAddedProducts([])
    }

    const purchase = (e: React.MouseEvent<HTMLButtonElement>) => {
        clearBasket()
        setIsModale(false);
    }

    const removeItem = (id: string, price: string) => {
        removeProduct(+id)
        removeBasket(+price)
    }

    return (
        <Container>
            <h1 className={styles.title}>
                Корзина
            </h1>
            <div className={styles.basketPage}>
                {!basket.count
                    ? <h1 className={styles.emptyMsg}>Ваша корзина пуста</h1>
                    :
                    <div className={styles.content}>
                        <div className={styles.products}>
                            {products.map((product: Product) =>
                                <div key={product.id} className={styles.product}>
                                    <div>
                                        <Link to={`/products/${product.id}`}>
                                            <img className={styles.productImg} src={product.img} alt=""/>
                                            <div     className={styles.productTitle}>{product.title}</div>
                                        </Link>

                                    </div>

                                    <div className={styles.productPurchase}>
                                        <span className={styles.productPrice}>
                                            Цена: <span className={styles.price}>{product.price}&#8381;</span>
                                        </span>
                                        <RemoveBtn onClick={() => removeItem(product.id, product.price)}/>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.purchase}>
                            <RemoveBtn onClick={clearBasket} width={'10%'} />
                            <PurchaseBtn price={`${basket.total}`} text={'Купить'}
                                         onClick={() => setIsModale(true)}/>
                        </div>
                    </div>
                }
            </div>

            { isModale &&
                <Modal>
                    <h3 className={styles.title}>
                        Покупка
                    </h3>

                    <div className={styles.modalContent}>
                        <h2 className={styles.modalTitle}>Спасибо за покупку!</h2>

                        <div>
                            <p>Приобретены товары:</p>
                                <ul className={styles.purchaseList}>
                                    {products.map((product: Product) =>
                                        <li key={product.id}>
                                            {product.title} -
                                            <span className={styles.price}> {product.price}&#8381;</span>
                                        </li>
                                    )}
                                </ul>
                            <p>На сумму: <span className={styles.price}>{basket.total}&#8381;</span></p>
                        </div>

                        <button className={styles.closeBtn}
                            onClick={purchase}
                        >
                            Закрыть
                        </button>
                    </div>
                </Modal>
            }
        </Container>
    );
};

export default BasketPage;