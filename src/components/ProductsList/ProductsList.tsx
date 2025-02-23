import {FC} from 'react';
import ProductItem, {Product} from "../ProductItem/ProductItem";

import styles from "./ProductsList.module.scss";

export interface ProductsListProps {
    products: Product[]
}

const ProductsList: FC<ProductsListProps> = ({products}: ProductsListProps) => {
    return (
        <div className={styles.productsList}>
            {products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </div>
    );
};

export default ProductsList;