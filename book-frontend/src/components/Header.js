// src/components/Header.js
import React, { useState, useEffect } from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import axios from "axios";
import debounce from "lodash.debounce";

const Header = ({ setSearchResults, setSearchQuery }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [query, setQuery] = useState("");

  const categories = [
    "Fantasy", "Dystopian", "Classic", "Historical", "Romance", "Adventure", "Drama", "Epic",
    "Magical Realism", "Satire", "Mythology", "Poetry", "Psychological", "Tragedy", "Absurdist",
    "Modernist", "Stream of Consciousness", "Experimental", "Gothic"
  ];

  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 5) {
    groupedCategories.push(categories.slice(i, i + 5));
  }

  const fetchSearchResults = async (query) => {
    if (query.trim() === "") {
      const response = await axios.get("http://localhost:8080/api/books");
      setSearchResults(response.data);
    } else {
      try {
        const response = await axios.get(`http://localhost:8080/api/books/search`, {
          params: { name: query }
        });
        setSearchResults(response.data);
      } catch (error) {
        console.error("There was an error fetching the search results!", error);
      }
    }
  };

  const debouncedFetchSearchResults = debounce(fetchSearchResults, 300);

  useEffect(() => {
    debouncedFetchSearchResults(query);
    setSearchQuery(query);
  }, [query]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="flex justify-between items-center p-4">
        <img
          src="https://rails-assets-us.bookshop.org/ds/images/logo.041f4577edde0efff6b67907832d4c3dfd52407b.svg"
          alt="Logo"
          className="h-10"
        />
        <form className="w-1/3">
          <input
            type="text"
            placeholder="What book you looking for ?"
            value={query}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
        <div className="flex items-center space-x-4">
          <button className="text-gray-800 hover:text-blue-600">Sign in</button>
          <ShoppingCart className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      <nav className="border-t border-b bg-white">
        <ul className="flex justify-center space-x-6 p-2">
          <li>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="text-gray-800 hover:text-blue-600 flex items-center"
            >
              Category
              <ChevronDown className="ml-1" />
            </button>
            {showCategories && (
              <div className="absolute bg-white border mt-2 p-2 shadow-lg rounded-lg">
                {groupedCategories.map((group, index) => (
                  <div key={index} className="flex space-x-2">
                    {group.map((category, idx) => (
                      <span key={idx} className="p-1 hover:bg-gray-200 rounded-md">
                        {category}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Best Seller
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Latest
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;