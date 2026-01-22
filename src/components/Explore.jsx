import React from 'react';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row_column"></div>
                <h2>
                    Explore more <span className="purple">Books</span>
                </h2>
                <a href="/books">
                <button className="btn">Explore all books</button></a>
            </div>
        </section>
    );      
};

export default Explore;