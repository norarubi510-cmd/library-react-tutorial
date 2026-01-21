import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Highlight = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section_title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlights__wrapper">
                    <Highlight 
                        icon={<FontAwesomeIcon icon="bolt" />} 
                        title="Easy and Quick" />
                        para="Get access to the book you purchased online instantly."
                    />
                    <Highlight 
                        icon={<FontAwesomeIcon icon="open-book" />} 
                        title="Easy and Quick" />
                        para="Read your favorite books online or offline, anytime."
                    />
                    <Highlight 
                        icon={<FontAwesomeIcon icon="tags" />} 
                        title="10,000+ Books" />
                        para="Explore a wide variety of books from all genres."
                    />
                </div>
            </div>
        </section>
    );
}

export default Highlights;