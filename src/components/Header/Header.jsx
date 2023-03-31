import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <h2 className='Heading'>Knowledge Cafe</h2>
            <div className='bar'>
             <a href="/Home" className='Link'>Home</a>
             <a href="/Inventory"className='Link'>Inventory</a>
             <a href="/Login"className='Link'>Login</a>

            </div>
            
        </div>
    );
};

export default Header;