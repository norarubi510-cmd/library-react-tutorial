import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
                   {books.title}
                </a>
            </div> 
            <div className="book_ratings">
              {
                new Array(Math.floor(book.rating)) .fill(0).map((_, index) => (
                    <FontAwesomeIcon icon="star" key={index} />
                ))
              }
              {
                Number.isInteger(book.rating) ? '' : <FontAwesomeIcon icon="star-half-alt" />
              }
            </div> 
            <div className="book_price">
               {books.price ? (
                <>
                <span className="book_price--normal">${books.price.toFixed(2)}
                </span>
                ${books.salePrice.toFixed(2)}
                </>
                ) : (
                    <>${books.originalPrice.toFixed(2)}</>
               )}
            </div>                           
        </div>
    );

}   

export default Book;