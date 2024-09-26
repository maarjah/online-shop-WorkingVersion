import { screen, render } from '@testing-library/react';
import Cart from '../pages/Cart/Cart.js';
import { ShopContextProvider } from '../providers/shop-context';
import { MemoryRouter } from 'react-router-dom';


test('rendering empty Cart', () => {
    //rendering Cart component
    //must be wrapped in the ShopContextProvider
    //and MemoryRouter components to enable rendering
    render(
        <ShopContextProvider>
            <MemoryRouter>
                <Cart />
            </MemoryRouter>
        </ShopContextProvider>
    );
    //finding Empty Cart text
    const emptyCart = screen.getByText(/your cart is empty/i);
    //assertion for the emptyCart
    expect(emptyCart).toBeInTheDocument();
});
