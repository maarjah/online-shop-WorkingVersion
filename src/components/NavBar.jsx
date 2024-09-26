import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './NavBar.css';
import logo from '../assets/logo2.png'

//creating Navigation bar visible througout the website
//consisting of a Logo, Shop Name and Cart icon
//Shop name and Cart icon are clickable
export const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={logo} className="logo" />
            <Link to='/' className="shopTitle">
                    SCHOOL SUPPLIES
            </Link>
            <Link to='/cart' className="links" data-testid="cart"> 
                <ShoppingCart size={32} />
            </Link>
        </div>
    )
}

export default NavBar;