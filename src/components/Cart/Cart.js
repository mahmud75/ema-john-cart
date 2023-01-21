import React from 'react';
import './Cart.css';

const Cart = ({cartData}) => {
    return (
        <div>
            <h3>This order summary</h3>
            <h4>Selected Items: {cartData.length}</h4>
        </div>
    );
};

export default Cart;