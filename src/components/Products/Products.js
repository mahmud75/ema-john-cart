import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';

const Products = (props) => {
    const {products, handelAddToCart} = props;
    const {img, name, price, ratings, seller} = products;
    return (
        <div className='product'>
            <img src={img} alt={''}/>
            <div className='product-info'>
                <p className='name'>{name}</p>
                <p> Price: {price}</p>
                <p><span>Seller: {seller}</span></p>
                <p><span>Ratings: {ratings}</span></p>
            </div>
            <button onClick={() => handelAddToCart(products)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;