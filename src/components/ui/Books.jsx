import React from 'react';

const Book =() => {
    return (
        <div className="book">
            <a href="">
                <figure className="book_img--wrapper">
                    <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book_img" />
                </figure>
            </a>
            <div className="book_title">
                <a href="/" className="book_title--link">
                   Atomic Habits
                </a>
            </div> 
            <div className="book_ratings">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" /> 
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star-half-alt" />
            </div> 
            <div className="book_price">
                <span className="book_price--normal">$14.99</span>
            </div>                           
        </div>
    );

}   

export default Book;