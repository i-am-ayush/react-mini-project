import React from 'react'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    return (
        <>
            cart items:
            <div className="restaurantCard flex-row ">
                {cartItems.map((itemObject) => {
                    return <div>{itemObject}</div>
                })}
            </div>
        </>
    )
}

export default Cart
