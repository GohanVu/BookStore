// src/components/BookDetail.js
import React, { useState } from "react";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

const BookDetail = ({ book, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(book?.imagine[0]?.url || "/api/placeholder/400/320");
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!book) return null;

  return (
    <div className="container mx-auto p-4 md:px-12">
      <button onClick={onBack} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center">
        <FaArrowLeft className="mr-2" /> Back
      </button>
      <div className="border rounded-lg p-6 shadow-lg bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-4 border rounded-lg shadow-md">
            <img
              src={selectedImage}
              alt={book.title}
              className="book-image w-full h-64 object-contain rounded-lg mb-4 cursor-pointer"
              onClick={() => setIsFullScreen(true)}
            />
            <div className="flex overflow-x-scroll space-x-2">
              {book.imagine.map((img, index) => (
                <img
                  key={index}
                  src={img.url || "/api/placeholder/400/320"}
                  alt={book.title}
                  className="book-image w-16 h-16 object-contain rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(img.url || "/api/placeholder/400/320")}
                />
              ))}
            </div>
          </div>
          <div className="md:ml-6 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800">{book.title}</h3>
            <p className="text-gray-600 mt-2"><span className="font-semibold">Author:</span> {book.author}</p>
            <p className="text-gray-600 mt-2"><span className="font-semibold">Year:</span> {book.publicationYear}</p>
            <p className="text-gray-600 mt-2"><span className="font-semibold">Genre:</span> {book.genre.name}</p>
            <p className="text-gray-600 mt-2"><span className="font-semibold">Price:</span> ${book.price.toFixed(2)}</p>
            <p className="text-gray-600 mt-4">{book.description}</p>
            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300 flex items-center">
              <FaShoppingCart className="mr-2" /> Add to cart
            </button>
          </div>
        </div>
      </div>
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setIsFullScreen(false)}>
          <img src={selectedImage} alt={book.title} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default BookDetail;