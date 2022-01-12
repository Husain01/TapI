import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
            <img src={logo} alt="logo" />
            </div>
            <div className="links">
                <ul className='navbar__links'>
                    <li>Cards</li>
                    <li>Resources</li>
                    <li>Login</li>
                </ul>
                <div className='button'>
            <button className='main bg-green'>Signup</button>
            <div className='rectangle border-neon'></div>
        </div>
            </div>
        </div>
    )
}

export default Navbar
