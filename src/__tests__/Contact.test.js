import { render, screen } from '@testing-library/react';
import Contact from '../pages/Contact/Contact.js';

test('renders Contact page titel', () => {
  //rendering Contact component
  render(<Contact />);
  //finding the expected text content
  const elementContact = screen.getByText("You can find us at:");
  //assertion for confirmation
  expect(elementContact).toBeInTheDocument();
});
