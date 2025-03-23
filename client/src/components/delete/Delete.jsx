export default function Delete({ itemName, itemId, setIsActive }) {
    
   return (
       <>
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                <h3 className="text-xl font-semibold text-white">Are you sure you want to delete this item?</h3>

                <div className="mt-6 flex justify-center gap-4">
                    <button 
                        className="bg-red-700 text-gray-300 py-2 px-6 rounded-lg hover:bg-red-600 focus:outline-none"
                    >
                        Yes
                    </button>
                    <button 
                        className="bg-gray-700 text-gray-300 py-2 px-6 rounded-lg hover:bg-gray-600 focus:outline-none"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
       </>
   );
}