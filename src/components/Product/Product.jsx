
import './Product.css';
import Category from "../Category/Category";
import {Link} from "react-router";
import Button from "../UI/Button/Button";
import {useContext, useEffect} from "react";
import {AddedProductsContext} from "../../context/addedProducts/AddedProductsContext";

const Product = ({product}) => {

    const {addedProducts, setAddedProducts} = useContext(AddedProductsContext);

    return (
        <Link
            to={`/products/${product.id}`}
            className='product'
            key={product.id}
        >
            <img src={product.img} className='product__img' alt='' />
            <div className='product__description'>
                <h2 className="product__title">
                    {product.title}
                </h2>

                <div className="product__categories">
                    {product.categories.map(category =>
                        <Category inactive={true}>{category}</Category>
                    )}
                </div>

                <div className="product__purchase">
                    <span className='product__price'>
                        {product.price}&#8381;
                    </span>
                    <Button
                        productId={product.id}
                        productPrice={product.price}
                        isAdded={addedProducts.includes(product.id)}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </Link>
    );
};

export default Product;