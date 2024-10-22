import React from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Footer from "./components/Footer";


const App = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <BookList />
        <Footer />
    </div>
);

export default App;