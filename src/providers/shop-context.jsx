import React from 'react';
import { createContext } from 'react';
import { PRODUCTS } from '../Products.js';
import { useState } from 'react';
import '../components/form-input.jsx';


// creating Shop Context variable using Context API
export const ShopContext = createContext(null);

//creating getter function for items in the Cart
export const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++ ) {
        cart[i] = 0;
    }
    return cart;
}


// creating Shop Context Provider
//function takes props to pass down product information from PRODUCTS
export const ShopContextProvider = (props) => {
    //creating variable for cartItems and respective setter function
    const [cartItems, setCartItems] = useState(getDefaultCart());
    //arrow function for getting the total cart amount for items in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((Product) => Product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };
    //arrow function for getting the string-list of items in the cart
    const getItemsInCartList = () => {
        let itemsString = "";
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((Product) => Product.id === Number(item));
                itemsString += itemInfo.productName + ": " + cartItems[item] + "\n";
            }
        }
        return itemsString;
    }
    //arrow fuction to add items in to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }; 
    //arrow function to remove items from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }; 

    //values available from the context
    const contextValue = { addToCart, removeFromCart, getTotalCartAmount, getItemsInCartList, setCartItems, cartItems};

    return ( 
        <ShopContext.Provider value= {contextValue}>
           {props.children}
        </ShopContext.Provider>
    )
};


