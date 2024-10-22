import React, { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/books")
      .then(response => setBooks(response.data))
      .catch(error => console.error("There was an error fetching the books!", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Danh Sách Sách</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map(book => (
          <div key={book.id} className="border rounded p-4">
            <img src={book.imagine[0]?.url || "/api/placeholder/400/320"} alt={book.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-700">Tác giả: {book.author}</p>
            <p className="text-gray-700">Năm xuất bản: {book.publicationYear}</p>
            <p className="text-gray-700">Giá: ${book.price.toFixed(2)}</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Mua Ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;