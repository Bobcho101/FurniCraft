import { Link, useParams } from "react-router";
import { fetchOneFurniture, useRecommendedFurniture } from "../../api/furnitureApi";
import { useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { checkIsOwner } from "../../utils/miniAuthorizations";
import Edit from "../edit/Edit";
import Delete from "../delete/Delete";


export default function Details() {
    window.scrollTo(0, 0);
    const { itemId } = useParams();
    const [ furniture, setFurniture ] = useState({});
    const [ recommendedFurniture ] = useRecommendedFurniture(furniture?.category, furniture?._id);
    const [ loading, setLoading ] = useState(true);
    const [ isEditActive, setIsEditActive ] = useState(false);
    const [ isDeleteActive, setIsDeleteActive ] = useState(false);
    const { _id } = useContext(UserContext);


    const fetchFurniture = async (furnitureId) => {
        try {
            const data = await fetchOneFurniture(furnitureId);;

            setFurniture(data); 
            setLoading(false); 
        } catch (err) {
            console.log(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFurniture(itemId);
    }, [itemId]); 


    const isOwner = useMemo(() => checkIsOwner(_id, furniture._ownerId), [furniture._ownerId, _id]);

    useEffect(() => {
        if (furniture && furniture._id) {
            setLoading(false);
        }
    }, [furniture, recommendedFurniture]);

    const handleFurnitureEdit = () => {  //* This thing here is for re-rendering the component when the furniture is edited
        fetchFurniture(itemId);
    };


    return (
        <>
        {isDeleteActive && <Delete itemName={furniture.name} itemId={furniture._id} setIsActive={setIsDeleteActive} />}
        {isEditActive && <Edit furniture={furniture} setIsActive={setIsEditActive} reRender={handleFurnitureEdit} loading={loading} setLoading={setLoading} />}
        {loading && 
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
        }
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


                {isOwner 
                ? (<div className="mt-4 flex gap-4">
                    <button onClick={() => setIsEditActive(true)} className="w-1/2 bg-gray-700 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-yellow-400 focus:outline-none">
                        Edit
                    </button>
                    <button onClick={() => setIsDeleteActive(true)} className="w-1/2 bg-red-700 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-red-500 focus:outline-none">
                        Delete
                    </button>
                    </div>) 
                : (
                    <button className="mt-30 w-full bg-indigo-600 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-indigo-500 focus:outline-none">
                        Buy Now
                    </button>
                )}

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
                    {recommendedFurniture.length > 0 
                    ?
                    recommendedFurniture.map((item) => (
                        <Link to={`/catalog/${item._id}/details`} key={item._id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h4 className="text-2xl font-semibold">{item.name}</h4>
                            <p className="text-indigo-400">{item.category}</p>
                            <p className="text-lg text-white font-semibold mt-auto">${item.price}</p>
                        </Link>
                    ))
                    : <h1 className="text-center text-xl font-semibold text-gray-400 mt-10">No Recommended Furniture</h1>
                    }
                </div>
            </div>
        </div>
        </>
    );
}