import { screen, render } from '@testing-library/react';
import { ShopContextProvider } from '../providers/shop-context';
import { ShopContext } from '../providers/shop-context';
import { MemoryRouter } from 'react-router-dom';
import product1 from '../assets/1.jpg';
import CartList from '../pages/Cart/CartList';
import React from 'react';

test('rendering CartList', async () => {
    //mock product
    const cartItems = [{
                id: 1,
                productName: "Notebook Cover",
                price: 1.50.toFixed(2),
                productImage: product1
            }];

    //rendering CartList component
    //must be wrapped in the ShopContextProvider
    //and MemoryRouter components to enable rendering
    render(
            <ShopContext.Provider value={cartItems}>
                <ShopContextProvider >
                    <MemoryRouter>
                        <CartList />
                    </MemoryRouter>
                </ShopContextProvider>
            </ShopContext.Provider>
    );
    //introducing a pause function
    //enabling extra time for asyncronous functions to finish processing      
    await pause();
    //finding the expected text
    const text = screen.getByText(/click & collect/i);
    //assenrtion to confirm the text content
    expect(text).toBeInTheDocument();

});

//pause for async functions
const pause = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
};