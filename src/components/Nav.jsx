import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';


const Nav = () => {
    function openMenu () {
      document.body.classList.add('menu--open');
    }

    function closeMenu () {
      document.body.classList.remove('menu--open');
    }
    return (
        <nav>
            <div className="nav__container">
                <a href ="/"> 
                <img src={LibraryLogo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav_list">
                        <a href="/books" className="nav_link">
                        Home
                        </a>
                    </li>
                     <li className="nav_list">
                        <a href="/books" className="nav_link">
                        Books
                        </a>
                    </li>
                    <button className="btn_menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav_icon">
                        <a href="/cart" className="nav_link">
                        <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
                <div className="menu_backdrop">
                    <button className="btn_menu btn_menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link"> 
                            Home
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href="/books" className="menu__link">
                            Books
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href="/cart" className="menu__link">
                            Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;