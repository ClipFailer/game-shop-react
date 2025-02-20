import React, {useContext, useState} from 'react';

import './Navbar.css';
import {Link} from "react-router";

import { FaShoppingBasket } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import { CiLight } from "react-icons/ci";

import {BasketContext} from "../../context/basket/BasketContext";
import {ThemeContext} from "../../context/ThemeContext/ThemeContext";

const Navbar = () => {

    const {basket} = useContext(BasketContext);
    const {theme, setTheme} = useContext(ThemeContext);

    const [menuToggle, setMenuToggle] = useState('');

    return (
        <div className="navbar">
            <Link to='/' className='navbar__logo'>
                GamesStore
            </Link>


            <div className={`navbar__right ${menuToggle}`}>
                <Link to='/basket' className='navbar__basket' onClick={() => {setMenuToggle('')}}>
                    <FaShoppingBasket/>
                    <div className='basket__count'>
                        {basket.counts}
                    </div>
                </Link>
                <button className={'theme-toggle'}
                    onClick={() => {
                        setMenuToggle('')
                        setTheme(theme === 'light' ? 'dark' : 'light');
                        }}
                >
                    { theme === 'light'
                        ? <MdDarkMode/>
                        : <MdLightMode/>
                    }
                </button>
                <Link to={'/profile'} className='user' onClick={() => {setMenuToggle('')}}>
                    <FaUser/>
                </Link>
            </div>
            <div className={`menu-toggle ${menuToggle}`}
                 onClick={() => {menuToggle === '' ? setMenuToggle('opened') : setMenuToggle('')}}>

                <span></span>
            </div>

        </div>
    );
};

export default Navbar;