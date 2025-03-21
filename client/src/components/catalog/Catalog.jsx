import { useEffect, useState } from 'react';
import { useFurniture } from '../../api/furnitureApi';
import { useNavigate, useParams } from 'react-router';
import { ITEMS_PER_PAGE } from '../../utils/constants';

function Catalog() {
    const navigate = useNavigate();
    const { page } = useParams();
    const pageNum = parseInt(page);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('price-low-to-high');
    const [loading, setLoading] = useState(true);
    const [ furniture, allFurnitureLength ] = useFurniture(sortOption, pageNum);

    const totalPages = Math.ceil(allFurnitureLength / ITEMS_PER_PAGE); 
    const isLastPage = pageNum === totalPages;

    if (pageNum <= 0) {
        navigate('/catalog/1'); 
    } 

    useEffect(() => {
        if (furniture && furniture.length > 0) {
            setLoading(false);
        }
    }, [furniture])
    
   


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
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <select
                            className="p-2 bg-gray-800 text-white rounded-md"
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="price-low-to-high">Price: Low to High</option>
                            <option value="price-high-to-low">Price: High to Low</option>
                            <option value="name-a-to-z">Name: A to Z</option>
                            <option value="name-z-to-a">Name: Z to A</option>
                        </select>
                    </div>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
                    </div>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {furniture.length > 0
                    ? furniture
                        .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
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
                        ))
                    : (<h1 className="text-2xl font-semibold text-center text-gray-400 mt-10">No Items</h1>) }
                </div>
                )}
            </div>
            <div className="flex justify-center mt-8">
                    <button onClick={() => {
                        if(pageNum === 1) return;
                        return navigate(`/catalog/${pageNum - 1}`)
                    }} className={`${pageNum === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'} px-4 py-2 mx-1`}>
                        Previous
                    </button>
                    <span className="px-4 py-2 mx-1 bg-gray-800 text-white rounded-md">{pageNum}</span>
                    <button disabled={isLastPage} onClick={() => navigate(`/catalog/${pageNum + 1}`)} className={`${isLastPage ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'} px-4 py-2 mx-1`}>
                        Next
                    </button>
                </div>
        </div>
    );
}


export default Catalog;