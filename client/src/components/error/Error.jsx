import { motion } from "framer-motion";

export default function Error({ errorMsg }) {
   return (
    <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -50 }} 
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-8 py-5 rounded-xl shadow-2xl z-50 text-lg font-semibold flex items-center justify-center w-[90%] max-w-xl border border-yellow-400"
        >
            <span className="text-yellow-400">⚠</span>
            <span className="ml-3">{errorMsg}</span>
    </motion.div>
   );
}