import React, { useContext } from "react";
import './Cart.css';
import { ShopContext } from "../../providers/shop-context";

//displaying Product information in the Cart
//adding and removing items to and from the Cart
export const CartItem = (product) => {
    const {id, productName, price, productImage} = product.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return (
        <li className="cartItem">
            <img src={productImage} alt="School supplies"/>
            <div className='description'>
                <p>{productName}</p>
                <p>{price} EUR </p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value= {cartItems[id]}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </li>
    )
}