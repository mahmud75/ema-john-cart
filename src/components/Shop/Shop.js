import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    useEffect( () => {
        const storedCart = getStoredCart();
        for(const id in storedCart){
            const addedProducts = products.find(product => product.id === id)
            console.log(addedProducts);
        }

    } , [])
    const handleAddToCart = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
        addToDb(products.id)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products 
                        products = {product}
                        handelAddToCart = {handleAddToCart}
                        key = {product.id}></Products>)
                }
            </div>
            <div className='cart-container'>
                <Cart cartData = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;