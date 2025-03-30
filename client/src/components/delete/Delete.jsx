import { useContext } from "react";
import { useDeleteFurniture } from "../../api/furnitureApi";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function Delete({ itemName, itemId, setIsActive }) {
    const [ deleteFunction ] = useDeleteFurniture(); 
    const navigate = useNavigate();
    const { accessToken } = useContext(UserContext);

    const deleteSubmitHandler = async () => {
        const res = await deleteFunction(itemId, accessToken);

        if(res.error){
            return alert(res.error);
        }
        return navigate("/catalog/1");
    }

    return (
        <>
            <motion.div
                className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 z-50"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                    <h3 className="text-xl font-semibold text-white">Are you sure you want to delete &quot;{itemName}&quot; ?</h3>

                    <div className="mt-6 flex justify-center gap-4">
                        <button 
                            onClick={deleteSubmitHandler}
                            className="bg-red-700 cursor-pointer text-gray-300 py-2 px-6 rounded-lg hover:bg-red-600 focus:outline-none"
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => setIsActive(false)} 
                            className="bg-gray-700 cursor-pointer text-gray-300 py-2 px-6 rounded-lg hover:bg-gray-600 focus:outline-none"
                        >
                            No
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}