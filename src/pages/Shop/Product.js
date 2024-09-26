import React, { useContext } from "react";
import { ShopContext } from "../../providers/shop-context";

//logic for products displayed on the Shop webpage
// using Context API and passing down props from PRODUCTS

export const Product = (product) => {
    const {id, productName, price, productImage} = product.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

    return (
        <li className="product" key={id}>
            <img src={productImage} alt="School supplies"/>
            <div className='description'>
                <h1>{productName}</h1>
                <p>{price} EUR </p>
                <button className="addToCartBtn" data-testid={`addToCartBtn-${id}`}
                    onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</> }
                </button>
            </div>
        </li>   
    );
};
