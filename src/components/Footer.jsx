import React from 'react';
import Logo from "../assets/Library.svg"

const Explore = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row_column">
                    <a href="/">
                    <figure className="footer_logo">
                        <img src={Logo} className="footer_logo--img" alt="" />
                    </figure>
                    </a>
                    <div className="footer_list">
                      <a href="/" className="footer_logo--link">Home</a>
                       <span className="footer_link no-cursor">About</span>
                       <a href="/books" className="footer_link">Books</a>
                       <a href="/cart" className="footer_link">Cart</a> 
                    </div>
                    <div className="footer_copyright">
                        Copyright &copy 2024 Library. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Explore;