
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import booksData from '../components/BookData';


const BookDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = booksData.find(b => b.id === parseInt(id));

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="book-detail">
            <button onClick={() => navigate(-1)}>Back</button>
            <img src={book.image} alt="book" />
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
            <a href={book.cover} download target='blank'>
                <button>Download</button>
            </a>
        </div>
    );
};

export default BookDetail;
