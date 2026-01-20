import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';


const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <a href ="/"> 
                <img src={LibraryLogo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li classNmae="nav_list">
                        <a href="/" className="nav_link">
                        Home
                        </a>
                    </li>
                     <li classNmae="nav_list">
                        <a href="/" className="nav_link">
                        Books
                        </a>
                    </li>
                    <button className="btn_menu">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav_icon">
                        <a href="/cart" className="nav_link">
                        <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;