import { Link } from 'react-router';
import { setDocumentTitle } from '../../utils/document';
import { motion } from 'framer-motion';

export default function Contacts() {
    setDocumentTitle("Contacts")
    window.scrollTo(0, 0);
    return (
        <>
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <motion.div className="w-full mt-15 max-w-lg p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >   
                <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

                <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <span className="text-indigo-400 text-lg font-semibold">Email:</span>
                    <span className="text-lg">bgbobi878@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-indigo-400 text-lg font-semibold">Phone:</span>
                    <span className="text-lg">+359 75 324 6451</span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-indigo-400 text-lg font-semibold">Address:</span>
                    <span className="text-lg">Bul. Bulgaria, Sofia, Bulgaria</span>
                </div>
                </div>

                <div className="mt-6">
                <div className="rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <iframe
                    className="w-full h-64 md:h-80 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1466.4490025919176!2d23.317797638195586!3d42.68470280748646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1743328503830!5m2!1sen!2sbg"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                </div>

                <div className="mt-6 text-center">
                <Link
                    to="/"
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                >
                    Back to Home
                </Link>
                </div>
        </motion.div>
        </div>
        </>
    );
}
