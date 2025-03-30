import { useContext, useEffect, useState } from "react";
import { useEditFurniture } from "../../api/furnitureApi";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../contexts/userContext";
import { emptyFieldsMsg } from "../../helpers/errorHandlingMsg";
import { checkForEmptyField } from "../../utils/formUtils";
import { motion } from "framer-motion";
import Error from "../error/Error";

export default function Edit({ furniture, setIsActive, reRender}) {
    const { accessToken } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [ error, setError ] = useState('');
    const [ edit ] = useEditFurniture();
    const [ formValues, changeFormValues ] = useForm({
        name: furniture.name,
        price: furniture.price, 
        category: furniture.category,
        image: furniture.image,
        description: furniture.description
    });

    const editSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        formValues.price = formValues.price.toString();
        const areEmptyFields = checkForEmptyField(formValues);
        if(areEmptyFields) {
            setError(emptyFieldsMsg);
            setLoading(false);
            return;
        }
        formValues.price = parseInt(formValues.price);
        
        const response = await edit(furniture._id, formValues, accessToken);
        if(response.error){
            return setError(response.error);
        }

        setLoading(false);
        reRender();
        setIsActive(false);
    }

    
    useEffect(() => {
        if(error){
            setTimeout(() => {
                setError('');
            }, 3000)
        }
    }, [error]);
    

    return(
        <>
        {loading ? 
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
        </div> : 
        <>
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 z-50">
         {error && <Error errorMsg={error} />} 
            <motion.div 
                className="bg-gray-800 p-8 rounded-lg w-96 max-w-full"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h2 className="text-2xl font-semibold text-white mb-6">Edit Item</h2>
                <form onSubmit={editSubmitHandler}>
                    <div className="mb-4">
                        <label htmlFor="itemName" className="block text-white font-medium mb-2">Item Name</label>
                        <input
                            onChange={changeFormValues}
                            type="text"
                            id="itemName"
                            name="name"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            placeholder="Enter item name"
                            value={formValues.name}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="itemCategory" className="block text-white font-medium mb-2">Category</label>
                        <select
                            onChange={changeFormValues}
                            value={formValues.category}
                            id="itemCategory"
                            name="category"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                        >
                            <option value="">Select Category</option>
                            <option value="Living Room">Living Room</option>
                            <option value="Dining Room">Dining Room</option>
                            <option value="Office">Office</option>
                            <option value="Bedroom">Bedroom</option>
                            <option value="Kitchen">Kitchen</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="itemDescription" className="block text-white font-medium mb-2">Description</label>
                        <textarea
                            onChange={changeFormValues}
                            id="itemDescription"
                            name="description"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            placeholder="Enter item description"
                            rows="4"
                            value={formValues.description}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="itemPrice" className="block text-white font-medium mb-2">Price</label>
                        <input
                            onChange={changeFormValues}
                            type="number"
                            id="itemPrice"
                            name="price"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            placeholder="Enter price"
                            value={formValues.price}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button
                            onClick={() => setIsActive(false)}
                            className="px-6 py-2 cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-500"
                        >
                            Cancel
                        </button>
                        <button
                            disabled={loading}
                            className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded-md hover:bg-green-500"
                        >
                            Save
                        </button>
                
                    </div>
                </form>
            </motion.div>
        </div> </> }
        </>
    )
}