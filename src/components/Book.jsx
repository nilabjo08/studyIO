
import React from 'react';
import { useNavigate } from 'react-router-dom';




const Book = ({ id, title, author, image }) => {
    const navigate = useNavigate();

    const handleViewDetail = () => {
        navigate(`/book/${id}`);
    };

    return (
        <div className="book" onClick={handleViewDetail}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{author}</p>
            <button>View Details</button>
        </div>
    );
};

export default Book;
