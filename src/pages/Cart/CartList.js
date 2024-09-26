import React, { useContext } from "react";
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../../providers/shop-context';
import { CartItem } from './CartItem';
import './Cart.css';
import FormInputProvider from '../../components/form-input';
import { useNavigate } from 'react-router-dom';

//displaying products in the cart
//if there are products in the cart, the Customer Data Form with Click&Collect notice will be displayed
function CartList() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart"> 
        <div className="addMargin">
        </div>
            <ul className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} /> 
                    }
                })}
            </ul>
            <div className="checkout">
                <p className="subtotal">
                    <b>Total: {totalAmount.toFixed(2)} EUR</b>
                </p>
                <div className="clickCollect">
                    <p> <b>Click & Collect: </b> </p>
                    <p>Your order will be ready for pick-up at the local store in <b>two business days</b>.</p>
                    <p>To submit your order, please enter your contact details:</p>
                </div>
                <FormInputProvider />
                <div className="continue">
                    <button onClick={() => navigate('/')}>Continue shopping</button>
                </div>
            </div>
        </div>
    )
};

export default CartList;