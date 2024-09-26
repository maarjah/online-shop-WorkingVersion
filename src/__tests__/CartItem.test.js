import { screen, render } from '@testing-library/react';
import product1 from '../assets/1.jpg';
import { CartItem } from '../pages/Cart/CartItem';
import user from "@testing-library/user-event";
import { ShopContextProvider } from '../providers/shop-context';

function RenderComponent() {
     //mock product data for passing down as props
     const productMock = {
        id: 1,
        productName: "Checked notebook",
        price: 1.50.toFixed(2),
        productImage: product1,
    };
    //rendering Cart component
    //must be provided with the context
    //thus wrapped inside ShopContextProvider
    render(
        <ShopContextProvider>
            <CartItem data={productMock}/>
        </ShopContextProvider>
    );
}

test('rendering item in the cart', () => {
    RenderComponent();

    //getting rendered elements
    //checking correct content of elements with respective assertions
    
    //product image
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    //product name
    const productName = screen.getByText(/checked notebook/i);
    expect(productName).toBeInTheDocument();
    //product price
    const price = screen.getByText("1.50 EUR");
    expect(price).toBeInTheDocument();
    //counthandler element consisting of addToCart() and removeFromCart() functions
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
});

test('checking the removeFromCart() is called on button click', async () => {
    RenderComponent();

    //getting button with removeFromCart function
    //confirming the button was found
    const button = screen.getByRole('button', {name: '-'});
    expect(button).toBeInTheDocument();
   
    //simulating clicking on the button
    user.click(button);

    //introducing a pause function
    //enabling extra time for asyncronous functions to finish processing
    await pause();

    //finding the input field which displays the cartItems amount
    //changing when adding and removing products by clicking respective buttons
    screen.findByRole('textbox');

    //getting the button element and confirming the value has been decremented by 1
    const count = screen.getByRole('textbox');
    expect(count).toHaveDisplayValue('-1');
});

test('checking the addToCart() is called on button click', async () => {
    RenderComponent();

    //getting button with addToCart function
    //confirming the button was found
    const button = screen.getByRole('button', {name: '+'});
    expect(button).toBeInTheDocument();
   
    //simulating clicking on the button
    user.click(button);

    //introducing a pause function
    //enabling extra time for asyncronous functions to finish processing
    await pause();

    //finding the input field which displays the cartItems amount
    //changing when adding and removing products by clicking respective buttons
    screen.findByRole('textbox');

    //getting the button element and confirming the value has been incremented by 1
    const count = screen.getByRole('textbox');
    expect(count).toHaveDisplayValue('1');
});

//pause functionality for testing async functions
const pause = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 100);
    })
};