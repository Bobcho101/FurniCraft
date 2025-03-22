import { Link, useParams } from "react-router";
import { useOneFurniture, useRecommendedFurniture } from "../../api/furnitureApi";


const recommendations = [
    {
        id: 1,
        name: "Luxury Leather Sofa",
        category: "Living Room",
        price: "$799",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 2,
        name: "Minimalist Wooden Chair",
        category: "Living Room",
        price: "$149",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 3,
        name: "Glass Coffee Table",
        category: "Kitchen",
        price: "$199",
        image: "https://via.placeholder.com/300x200",
    },
];

export default function Details() {
    const { itemId } = useParams();
    const [ furniture ] = useOneFurniture(itemId);
    const [ recommendedFurniture ] = useRecommendedFurniture(furniture.category, furniture._id);


    return (
        <>
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10">
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-5xl w-full flex flex-col lg:flex-row gap-10 mt-20">
                <div className="w-full lg:w-1/2">
                    <img
                        src={furniture.image}
                        alt={furniture.name}
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl font-bold">{furniture.name}</h2>
                    <p className="text-indigo-400 text-lg mt-2">{furniture.category}</p>
                    <p className="text-gray-300 mt-4">{furniture.description}</p>
                    <p className="text-2xl font-semibold text-white mt-4">${furniture.price}</p>

                    <button className="mt-48 w-full bg-indigo-600 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-indigo-500 focus:outline-none">
                        Buy Now
                    </button>

                    <div className="mt-5 text-center">
                        <Link
                            to="/catalog/1"
                            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                        >
                            Back to Catalog
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-12 max-w-5xl w-full">
                <h3 className="text-3xl font-semibold mb-6 text-center">You May Also Like</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recommendedFurniture.map((item) => (
                        <div key={item._id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h4 className="text-2xl font-semibold">{item.name}</h4>
                            <p className="text-indigo-400">{item.category}</p>
                            <p className="text-lg text-white font-semibold mt-auto">${item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}