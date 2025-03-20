import { useState } from 'react';
import { useFurniture } from '../../api/furnitureApi';

export default function Catalog() {
    const [search, setSearch] = useState('');
    const [ furniture ] = useFurniture();

    return (
        <div className="bg-gray-900 text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6 mt-15">
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
                    {furniture
                        .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                        .map((item) => (
                            <div
                                key={item._id}
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
