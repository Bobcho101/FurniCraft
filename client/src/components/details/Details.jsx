import { Link } from "react-router";

export default function Details() {
    const product = {
        name: "Modern Wooden Table",
        category: "Table",
        price: "$299",
        description:
            "A beautifully crafted wooden table made from high-quality oak. Perfect for any modern home or office space.",
        ownerId: "user-12345",
        image: "https://via.placeholder.com/600x400", 
    };

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

    return (
        <>
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10">
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-5xl w-full flex flex-col lg:flex-row gap-10 mt-20">
                <div className="w-full lg:w-1/2">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl font-bold">{product.name}</h2>
                    <p className="text-indigo-400 text-lg mt-2">{product.category}</p>
                    <p className="text-gray-300 mt-4">{product.description}</p>
                    <p className="text-2xl font-semibold text-green-400 mt-4">{product.price}</p>

                    <button className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-500 focus:outline-none">
                        Buy Now
                    </button>

                    <div className="mt-6 text-center">
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
                    {recommendations.map((item) => (
                        <div key={item.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-auto rounded-lg mb-4"
                            />
                            <h4 className="text-2xl font-semibold">{item.name}</h4>
                            <p className="text-indigo-400">{item.category}</p>
                            <p className="text-lg text-green-400 font-semibold mt-2">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}