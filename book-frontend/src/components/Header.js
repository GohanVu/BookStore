import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { ChevronDown } from "lucide-react";

const Header = () => {
    const [showCategories, setShowCategories] = useState(false);

    const categories = [
        "Fantasy", "Dystopian", "Classic", "Historical", "Romance", "Adventure", "Drama", "Epic",
        "Magical Realism", "Satire", "Mythology", "Poetry", "Psychological", "Tragedy", "Absurdist",
        "Modernist", "Stream of Consciousness", "Experimental", "Gothic"
    ];

    const groupedCategories = [];
    for (let i = 0; i < categories.length; i += 5) {
        groupedCategories.push(categories.slice(i, i + 5));
    }

    return (
        <header className="bg-white text-gray-800 shadow-md">
            {/* First Row */}
            <div className="flex justify-between items-center p-4">
                {/* Logo */}
                <img
                    src="https://rails-assets-us.bookshop.org/ds/images/logo.041f4577edde0efff6b67907832d4c3dfd52407b.svg"
                    alt="Logo"
                    className="h-10"
                />

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="What book you looking for ?"
                    className="border border-gray-300 rounded-full px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Login and Cart */}
                <div className="flex items-center space-x-4">
                    <button className="text-gray-800 hover:text-blue-600">Sign in</button>
                    <ShoppingCart className="h-6 w-6 cursor-pointer" />
                </div>
            </div>

            {/* Second Row */}
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