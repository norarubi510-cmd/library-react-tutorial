import React from 'react';
import Logo from "../assets/Library.svg"

const Explore = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row_column">
                    <a href="/">
                    <figure className="footer_logo">
                        <img src={Logo} class="footer_logo--img" alt="" />
                    </figure>
                    </a>
                    <div className="footer_list">
                      <a href="/" className="footer_logo--link">Home</a>
                       <span className="footer_link no-cursor">About</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Explore;