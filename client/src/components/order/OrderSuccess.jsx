import { useNavigate } from "react-router";
import { motion } from 'framer-motion';

const OrderSuccess = () => {
    const navigate = useNavigate();

    const navigateToCatalog = () => {
        navigate('/catalog/1');
    }

    return(
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm"
        >
        <h2 className="text-2xl font-bold text-white">Order Successful!</h2>
        <p className="text-gray-300 mt-2">Thank you for your purchase.</p>
        <div className="mt-4">
            <button 
                onClick={navigateToCatalog}
                className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
            >
                Back to Catalog
            </button>
        </div>
        </motion.div>
    </div>
    </>)
}

export default OrderSuccess;