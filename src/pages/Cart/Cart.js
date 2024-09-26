import React, { useContext } from "react";
import { ShopContext } from '../../providers/shop-context';
import './Cart.css';
import CartList from "./CartList";

//creating layout and functionality for the Cart webpage
//empty Cart webpage
function EmptyCartBlock() {
    return (
        <div className="emptyCart">
            Your cart is empty
        </div>
    )
};

//rendering cart items or an empty cart, if there are no products in the cart
function Cart() {
    const { getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return (
        <div>
           {totalAmount > 0 ? <CartList /> : <EmptyCartBlock /> }
        </div>
    )
};

export default Cart;
