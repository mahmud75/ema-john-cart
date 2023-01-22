import React from 'react';
import './Cart.css';

const Cart = ({cartData}) => {
    let totalPrice = 0;
    let shipping = 0;
    for(const total of cartData){
        totalPrice+= total.price
        shipping += total.shipping;
    }
    const tax = totalPrice * 0.1;
    const fixedTax = parseInt(tax.toFixed(2));
    const grandTotal = totalPrice + shipping + fixedTax;
    return (
        <div className='cart'>
            <h3>This order summary</h3>
            <p>Selected Items: {cartData.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {fixedTax}</p>
            <h4>Grand Total: {grandTotal}</h4>
        </div>
    );
};

export default Cart;