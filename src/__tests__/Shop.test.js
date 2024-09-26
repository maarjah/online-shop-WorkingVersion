import {render, screen} from '@testing-library/react';
import Shop from '../pages/Shop/Shop.js';
import { ShopContextProvider } from '../providers/shop-context.jsx';
import user from '@testing-library/user-event';
import React from "react";

test('rendering shop content with all 18 products', async () => {
    //rendering Shop component
    //must be provided with the context by wrapping inside ShopContextProvider
    render(<ShopContextProvider>
            <Shop />
        </ShopContextProvider>);
    
    //waiting for elements for testing
    await screen.findAllByRole('heading');

    //finding all 18 product names and all 18 Add to Cart buttons
    //respective assertions to make sure all 18 are found
    const productNames = screen.getAllByRole('heading');
    expect(productNames).toHaveLength(18);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(18);
});

test('calls addToCart() when the Add To Cart button is clicked', async () => {
    //rendering Shop component
    //needs to be wrapped in the ShopContextProvider component
    render(
        <ShopContextProvider>
            <Shop />
        </ShopContextProvider>);

    //waiting for elements for testing
    await screen.findAllByRole('button');
    //finding one specific button for testing
    const button7 = screen.getByTestId('addToCartBtn-7');
    
    //simulating clicking the button
    user.click(button7);
    //allowing async functions to finish processing
    await pause();
    //screen.debug();
    //const buttonText = screen.getByText(/add to cart (1)/i);

    //assertion to make sure 'onClick" gets called with clickCount
    expect(button7).toHaveTextContent("Add to Cart (1)");
})

//pause for async functions' testing
const pause = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 100);
    })
};
