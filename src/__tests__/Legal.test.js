import { render, screen } from '@testing-library/react';
import Legal from '../pages/Legal/Legal.js';

test('renders Legal page titel', () => {
  //rendering Legal component
  render(<Legal />);
  //finding the expected text content
  const titelLegal = screen.getByText("Terms of service");
  //assertion to confirm
  expect(titelLegal).toBeInTheDocument();
});
