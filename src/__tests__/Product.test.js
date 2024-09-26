import {render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import {Product} from '../pages/Shop/Product.js';
import product1 from '../assets/1.jpg';
import { ShopContextProvider } from '../providers/shop-context.jsx';
import React from "react";

test('rendering products', async () => {
    //mock product information to pass down as props
    const productMock = {
        id: 1,
        productName: "Ruled notebook",
        price: 1.30.toFixed(2),
        productImage: product1,
    };

    //rendering the component
    //ShopContextProvider wrapping the component for rendering
    render(
        <ShopContextProvider>
            <Product data={productMock}/>
        </ShopContextProvider>);
    
    //waiting for elements for testing
    await screen.findByRole('img');

    //manipulating/finding elements in the component
    //with assertions making sure the component is doing
    //what we expect it to do
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();

    const productName = screen.getByRole('heading');
    expect(productName).toHaveTextContent('Ruled notebook');

    const price = screen.getByText('1.30 EUR');
    expect(price).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/add to cart/i);
});

test('calls addToCart() when the Add To Cart button is clicked', async () => {
    //mock product information to pass down as props
    const productMock = {
        id: 1,
        productName: "Ruled notebook",
        price: 1.30.toFixed(2),
        productImage: product1,
    };
    
    //rendering Product component
    //needs to be wrapped in the ShopContextProvider component
    render(
        <ShopContextProvider>
            <Product data={productMock}/>
        </ShopContextProvider>);

    //waiting for elements for testing
    await screen.findByRole('button');
    //finding the button
    const button = screen.getByRole('button');
    
    //simulating clicking the button
    user.click(button);
    //enabling async processes to finish
    await pause();

    //assertion to make sure 'onClick" gets called with clickCount
    expect(button).toHaveTextContent("Add to Cart (1)");
})

//pause for async function testing
const pause = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 100);
    })
};