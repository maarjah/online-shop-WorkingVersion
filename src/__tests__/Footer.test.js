import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer';

test('renders Footer', async () =>{
    //rendering the Footer component
    //must be wrapped inside the MemoryRouter
    render(
    <MemoryRouter>
        <Footer />
    </MemoryRouter>
    );

    //waiting for async processes to finish by finding the Link "Legal"
    await screen.findByRole('link', {name: /legal/i});
    //variable for the Link element
    const legal = screen.getByRole('link', {name: 'Legal'});
    //assertion for confirmation
    expect(legal).toBeInTheDocument();

    //waiting for async processes to finish by finding the Link "Contact"
    await screen.findByRole('link', {name: /contact/i});
    //variable for the Link element
    const contact = screen.getByRole('link', {name: 'Contact'});
    //assertion for confirmation
    expect(contact).toBeInTheDocument();
});