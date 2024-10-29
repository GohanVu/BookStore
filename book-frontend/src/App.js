// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import axios from "axios";
import BookDetail from "./BookDetail";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/books")
      .then(response => {
        setBooks(response.data);
        setSearchResults(response.data);
      })
      .catch(error => console.error("There was an error fetching the books!", error));
  }, []);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleBack = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <Header setSearchResults={setSearchResults} setSearchQuery={setSearchQuery} />
      {selectedBook ? (
        <BookDetail book={selectedBook} onBack={handleBack} />
      ) : (
        <BookList books={searchResults} searchQuery={searchQuery} onSelectBook={handleSelectBook} />
      )}
      <Footer />
    </div>
  );
};

export default App;