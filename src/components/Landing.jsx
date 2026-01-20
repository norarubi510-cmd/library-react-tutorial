import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header_container">
                    <div className="header_description">
                      <h1>Australia's most awarded online library platform</h1>
                      <h2>Find your dream book with <span className="purple">Library</span></h2>
                      <a href="#features">
                        <button className="btn">Browse Books</button>
                      </a>
                   </div>
                 <figure className="header_img--wrapper">
                    <img src="../assets/Undraw_Books.svg" alt="" />
                 </figure>
                </div>

            </header>
        </section>
    );

}

export default Landing;