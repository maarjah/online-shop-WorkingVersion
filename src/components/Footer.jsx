import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

//creating Footer bar visible througout the website
//consisting of Contact Page and Legal notice page

function Footer() {
    return (
        <div id="footer">
                <Link to='/legal'>
                    <div className='links'>
                        Legal
                    </div>
                </Link>
                <Link to='/contact'> 
                    <div className='links'>
                        Contact
                    </div>
                </Link>
        </div>
    )
};

export default Footer;