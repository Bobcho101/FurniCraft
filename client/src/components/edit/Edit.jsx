

export default function Edit({ setIsActive }) {
    return(
        <>
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 z-50">
            <div className="bg-gray-800 p-8 rounded-lg w-96 max-w-full">
                <h2 className="text-2xl font-semibold text-white mb-6">Edit Item</h2>

                <div className="mb-4">
                    <label htmlFor="itemName" className="block text-white font-medium mb-2">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        name="name"
                        className="w-full p-2 bg-gray-700 text-white rounded-md"
                        placeholder="Enter item name"
                        defaultValue="" 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="itemCategory" className="block text-white font-medium mb-2">Category</label>
                    <select
                        id="itemCategory"
                        name="category"
                        className="w-full p-2 bg-gray-700 text-white rounded-md"
                    >
                        <option value="">Select category</option>
                        <option value="chairs">Chairs</option>
                        <option value="tables">Tables</option>
                        <option value="sofas">Sofas</option>
                        <option value="beds">Beds</option>
                        <option value="desks">Desks</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="itemDescription" className="block text-white font-medium mb-2">Description</label>
                    <textarea
                        id="itemDescription"
                        name="description"
                        className="w-full p-2 bg-gray-700 text-white rounded-md"
                        placeholder="Enter item description"
                        rows="4"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="itemPrice" className="block text-white font-medium mb-2">Price</label>
                    <input
                        type="number"
                        id="itemPrice"
                        name="price"
                        className="w-full p-2 bg-gray-700 text-white rounded-md"
                        placeholder="Enter price"
                        defaultValue=""
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
                        className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded-md hover:bg-green-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}