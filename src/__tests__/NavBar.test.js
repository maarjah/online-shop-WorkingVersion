import { render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders Navbar links and logo', async () =>{
    //rendering Navigation bar component
    //must be wrapped in MemoryRouter
    render(
    <MemoryRouter>
        <NavBar />
    </MemoryRouter>
    );

    //waiting for async processes to finish by finding expected Link element
    await screen.findByRole('link', {name: /school supplies/i});
    //variable for the link element
    const link = screen.getByRole('link', {name: 'SCHOOL SUPPLIES'});
    //assertion to test the existance of the link
    expect(link).toBeInTheDocument();
    //assertion to test the right route of the link
    expect(link).toHaveAttribute('href', '/')
    //waiting for async processes to finish by finding image element
    await screen.findByRole('img');
    //variable for logo image element
    const logo = screen.getByRole('img');
    //assertion to confirm the existance
    expect(logo).toBeInTheDocument();
    //waiting for async processes to finish by finding link elements
    await screen.findAllByRole('link');
    //there need to be 2 links in the navbar
    const links = screen.getAllByRole('link');
    //assertion to confirm
    expect(links).toHaveLength(2);
});

 //screen.logTestingPlaygroundURL();
