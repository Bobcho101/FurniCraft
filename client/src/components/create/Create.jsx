import { useContext, useEffect, useState } from "react";
import { useCreateFurniture } from "../../api/furnitureApi";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";
import { emptyFieldsMsg, invalidCategoryMsg } from "../../helpers/errorHandlingMsg";
import { checkForEmptyField } from "../../utils/formUtils";
import { useIsUser } from "../../guards/routeGuards";
import Error from "../error/Error";
import { motion } from "framer-motion";
import { setDocumentTitle } from "../../utils/document";

export default function Create() {
    setDocumentTitle("Create");
    const [ createFurniture ] = useCreateFurniture();
    const [ error, setError ] = useState('');
    const navigate = useNavigate();
    const { accessToken } = useContext(UserContext);
    const [ formValues, changeFormValues ] = useForm({
        'name': '',
        'category': '',
        'price': '',
        'description': '',
        'image': '',
    });

    const isUser = useIsUser(accessToken);

    useRouteGuard(isUser, navigate);

    const createSubmitHandler = async (e) => {
        e.preventDefault();

        const areEmptyFields = checkForEmptyField(formValues);
        if(areEmptyFields) return setError(emptyFieldsMsg);

        const validCategories = ["Living Room", "Dining Room", "Office", "Bedroom", "Kitchen"];

        if(!validCategories.includes(formValues.category)){
            return setError(invalidCategoryMsg);
        }
        formValues.price = Number(formValues.price);
        const response = await createFurniture(formValues, accessToken);

        if(response.error){
            return setError(response.error);
        };

        return navigate('/catalog/1');
    }

    useEffect(() => {
        if(error){
            setTimeout(() => {
                setError('');
            }, 3000)
        }
    }, [error]);

    return (
        <>
        {error && <Error errorMsg={error} />}
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-16">
            <h2 className="text-4xl font-semibold mb-10 text-center mt-15">Sell Your Furniture</h2>

            <motion.div 
            className="max-w-2xl w-full bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >
                <form onSubmit={createSubmitHandler}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Furniture Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formValues.name}
                            onChange={changeFormValues}
                            name="name"
                            placeholder="Enter furniture name"
                            className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-300">
                            Category
                        </label>
                        <select
                            id="category"
                            onChange={changeFormValues}
                            value={formValues.category}
                            name="category"
                            className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
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
                        <label htmlFor="price" className="block text-sm font-medium text-gray-300">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            id="price"
                            onChange={changeFormValues}
                            value={formValues.price}
                            name="price"
                            placeholder="Enter price"
                            className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formValues.description}
                            onChange={changeFormValues}
                            placeholder="Describe your furniture"
                            rows="4"
                            className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-300">
                            Image Url:
                        </label>
                        <input type="text" onChange={changeFormValues} id="image" name="image" className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none text-white" />
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Add Product
                    </button>
                </form>
            </motion.div>
        </div>
        </>
    );
};


const useRouteGuard = (isUser, navigate) => {
    useEffect(() => {
        if(!isUser){
            navigate('/login');
        }
    }, [isUser, navigate]);
}