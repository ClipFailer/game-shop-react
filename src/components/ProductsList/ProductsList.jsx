import React from 'react';
import Product from "../Product/Product";

import './ProductList.css';
import uuid from "react-uuid";

const ProductsList = ({products}) => {
    return (
        <div className="products">
            {
                products.map((product) => (
                    <Product
                        key={uuid()}
                        product={product}
                    />
                ))
            }
        </div>
    );
};

export default ProductsList;