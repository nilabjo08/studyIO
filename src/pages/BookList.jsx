
import React, { useState } from 'react';
import Book from '../components/Book';
import booksData from '../components/BookData';

const BookList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = booksData.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())

    );

    return (
        <div>
            <section className="search-bar">
                <input
                    type="text"
                    placeholder="Search for books, authors, genres..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </section>
            <section className="book-showcase">
                <h2>Featured Books</h2>
                <div className="book-list">
                    {console.log(filteredBooks)}
                    {filteredBooks.map(book => (
                        <Book
                            key={book.id}
                            {...book}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BookList;

