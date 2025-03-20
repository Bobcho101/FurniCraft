import { useState } from 'react';
import { Link } from 'react-router';

const catalogItems = [
    {
        id: "1",
        name: "Modern Sofa",
        price: "799",
        description: "A comfortable and stylish modern sofa for your living room.",
        image: "https://assets.wfcdn.com/im/883969/resize-h800-w800%5Ecompr-r85/2802/280230171/Light+Luxury+Simple+Modern+Sofa+82.68%27%27+Upholstered+Sofa.jpg",  // Add actual image path
        ownerId: "dw34-63fa-323g-kdwm-3217",
        category: "Living Room",  
    },
    {
        id: "2",
        name: "Wooden Dining Table",
        price: "399",
        description: "A premium quality wooden dining table for family gatherings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeKOfavRHZAXYebx6yA7jx2oc_BAMZ1OeVA&s",  
        ownerId: "kd98-3hfg-92kd-asdq-9826",
        category: "Dining Room",  
    },
    {
        id: "3",
        name: "Ergonomic Office Chair",
        price: "349",
        description: "An adjustable ergonomic chair designed for long working hours.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUl32v9xmpyOlNUCqtWNnM6AxUZ9NBF5Gilg&s",  
        ownerId: "lm28-asd1-78fg-mzxc-4591",
        category: "Office",  
    },
    {
        id: "4",
        name: "Minimalist Bed Frame",
        price: "599",
        description: "A sturdy and elegant bed frame with a sleek design.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Hk5kTVXHjmCSu6MoCW6rGcgsNw-pyoPQqw&s", 
        ownerId: "dw34-63fa-323g-kdwm-3217",
        category: "Bedroom",    
    },
    {
        id: "5",
        name: "Bookshelf Storage",
        price: "299",
        description: "A multi-level bookshelf for organizing your favorite reads.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MVnktahgSwEm8E6TE5n0zq05_Q8oXmH_AQ&s", 
        ownerId: "kd98-3hfg-92kd-asdq-9826",
        category: "Living Room", 
    },
];

export default function Catalog() {
    const [search, setSearch] = useState('');

    return (
        <div className="bg-gray-900 text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center mb-8">Catalog</h2>

                <div className="flex justify-between items-center mb-6">
                    <div className="w-1/3">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full p-2 bg-gray-800 text-white rounded-md"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <select
                            className="p-2 bg-gray-800 text-white rounded-md"
                        >
                            <option value="price-low-to-high">Price: Low to High</option>
                            <option value="price-high-to-low">Price: High to Low</option>
                            <option value="name-a-to-z">Name: A to Z</option>
                            <option value="name-z-to-a">Name: Z to A</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {catalogItems
                        .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                        .map((item) => (
                            <div
                                key={item.id}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700"
                            >
                                <img src={item.image} alt={item.name} className="w-full h-48 object-contain rounded-md mb-4" />
                                <h3 className="text-2xl font-semibold text-center">{item.name}</h3>
                                <p className="text-center text-indigo-400">{item.category}</p>
                                <p className="text-center text-xl mt-3">${item.price}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
