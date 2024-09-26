import React from 'react'
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import FormInputProvider from '../components/form-input';
import { ShopContextProvider } from '../providers/shop-context';


test('submitting customer name, email and phone', async () => {
    //rendering FormInputProvider component
    //must be wrapped in ShopCpntexProvider
    render(<ShopContextProvider>
                <FormInputProvider />
            </ShopContextProvider>);

//finding form fields
await screen.findAllByRole('textbox');
//variavles for input fields
const [nameInput, emailInput, phoneInput] = screen.getAllByRole('textbox');

//simulating typing in a name
user.click(nameInput);
user.keyboard('Jane Doe');

//simulating typing in an email
user.click(emailInput);
user.keyboard('jane.doe@email.com');

//simulating typing in a phone number
user.click(phoneInput);
user.keyboard('111222333');

//finding the submit button
const button = screen.getByRole('button', {value: 'Order'});
//simulating clicking on the button
user.click(button);

//enabling async processes to finish
await pause();

//assertions to confirm that the expected input has been found
expect(nameInput).toBeInTheDocument();
expect(emailInput).toBeInTheDocument();
expect(phoneInput).toBeInTheDocument();
});

//pause function needed for testing async processes
const pause = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 100);
    })
};

