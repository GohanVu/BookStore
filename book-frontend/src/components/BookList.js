// src/components/BookList.js
import React from "react";

const BookList = ({ books, searchQuery, onSelectBook }) => {
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    );
  };

  return (
    <div className="container mx-auto p-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map(book => (
          <div key={book.id} className="border rounded p-2 text-xs">
            <img
              src={book.imagine[0]?.url || "/api/placeholder/400/320"}
              alt={book.title}
              className="book-image cursor-pointer h-48 object-cover"
              onClick={() => onSelectBook(book)}
            />
            <h3
              className="text-lg font-bold cursor-pointer hover:text-blue-600 hover:underline"
              onClick={() => onSelectBook(book)}
            >
              {highlightText(book.title, searchQuery)}
            </h3>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">Year: {book.publicationYear}</p>
            <p className="text-gray-700">Genre: {book.genre.name}</p>
            <p className="text-gray-700">Price: ${book.price.toFixed(2)}</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;