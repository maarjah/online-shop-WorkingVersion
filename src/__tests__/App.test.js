import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../App.js';

//Displaying all 19 products from the product list component
test('shows all 18 products', async () => {
  //rendering App component
  render(<App />);
  //finding all heading elements, which are product names
  const titles = await screen.findAllByRole('heading');
  //assertion that the titles list has 18 elements
  expect(titles).toHaveLength(18);
});

test('calls addToCart() when the Add To Cart button is clicked', async () => {
  //rendering App component
  render(<App />);
  
  //waiting for elements for testing
  await screen.findAllByRole('button');
  //finding one specific button for testing
  const button9 = screen.getByTestId('addToCartBtn-9');
  
  //simulating clicking the button
  user.click(button9);
  //allowing for context changes to take place
  await pause();
  
  //assertion to make sure 'onClick" gets called with clickCount
  expect(button9).toHaveTextContent("Add to Cart (1)");
});

test('showing cart items and correct total amount after Add To Cart button is clicked and user clicks cart icon', async () => {
  //rendering App component
  render(<App />);

  //waiting for elements for testing
  await screen.findAllByRole('button');
  await screen.findByTestId('cart');
  //finding the buttons for testing
  const button5 = screen.getByTestId('addToCartBtn-5');
  const cart = screen.getByTestId('cart');
  
  //simulating clicking the product Add to Cart button
  user.click(button5);
  //allowing for context changes to take place
  await pause();
  //simulating clicking the cart button
  user.click(cart);
  await pause();

  const totalAmount = screen.getByText(/total: 1.60 EUR/i);
 
  //assertion to make sure 'onClick" gets called with clickCount
  expect(button5).toHaveTextContent("Add to Cart (1)");
  expect(totalAmount).toBeInTheDocument;
});

//adding a pause functionality to enable async processes to take place
const pause = () => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve();
      }, 100);
  })
};

