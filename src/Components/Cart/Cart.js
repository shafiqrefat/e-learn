import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce( (totalPrice, price) =>totalPrice + price.price, 0)
    return (
        <div className='cart-section'>
            <h4>Order Summary: </h4>
            <p>Course Ordered: {cart.length}</p>
            <h3><small>Total Price: $ {totalPrice.toFixed(2)}</small></h3>
            <button className='checkOut-button'>Check Out</button>
        </div>
    );
};

export default Cart;