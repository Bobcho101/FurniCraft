export default function Edit({ furniture ,setIsActive }) {
    console.log(furniture);
    
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
                        defaultValue={furniture.name}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="itemCategory" className="block text-white font-medium mb-2">Category</label>
                    <select
                        defaultValue={furniture.category}
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
                        id="itemDescription"
                        name="description"
                        className="w-full p-2 bg-gray-700 text-white rounded-md"
                        placeholder="Enter item description"
                        rows="4"
                        defaultValue={furniture.description}
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
                        defaultValue={furniture.price}
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