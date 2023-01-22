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
        let saveProducts = [];
        for(const id in storedCart){
            const addedProducts = products.find(product => product.id === id)
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                saveProducts.push(addedProducts);
            }
        }

        setCart(saveProducts);

    } , [products])
    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const remaining = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity++;
            newCart = [...remaining, exists];
        }


        setCart(newCart);
        addToDb(selectedProduct.id)
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