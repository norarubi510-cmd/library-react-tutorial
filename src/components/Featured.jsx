import React from 'react';
import Book from './ui/Books';

const Featured = () => {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section_title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Featured;