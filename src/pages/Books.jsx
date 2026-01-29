import React, { useState } from 'react';
import Book from '../components/ui/Book';

const Books = ({ books: initialBooks }) => {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks(e) {
        const filter = e.target.value;
        let sortedBooks = [...books];
        switch (filter) {
            case "low_to_high":
                sortedBooks.sort((a, b) => a.price - b.price);
                break;
            case "high_to_low":
                sortedBooks.sort((a, b) => b.price - a.price);
                break;
            case "a_to_z":
                sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "z_to_a":
                sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
                break;
            default:
                break;
        }
        setBooks(sortedBooks);
    }

  return (
    <div id="books_body">   
      <main id="books_main">
        <section>
            <div className="books_container">
                <div className="row">
                    <div className="books_header">
                        <h2 className="section_title books_header--title">All Books</h2>
                        <select id="filter" defaultValue="DEFAULT" onChange={(e) => filterBooks(e)}>
                            <option value="DEFAULT" disabled>Sort</option>
                            <option value="low_to_high">Price: Low to High</option>
                            <option value="high_to_low">Price: High to Low</option>
                            <option value="a_to_z">Alphabetical: A to Z</option>
                            <option value="z_to_a">Alphabetical: Z to A</option>
                        </select>
                    </div>
                    <div className="books">
                        {
                            books.map(book =>
                                 <Book book={book} key={book.id} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
 );

};

export default Books;