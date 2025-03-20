export default function Create() {
   return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-16">
        <h2 className="text-4xl font-semibold mb-10 text-center">Sell Your Furniture</h2>

        <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Furniture Name
                    </label>
                    <input
                        type="text"
                        id="name"
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
                        name="category"
                        className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    >
                        <option value="">Select Category</option>
                        <option value="Sofa">Living Room</option>
                        <option value="Chair">Dining Room</option>
                        <option value="Table">Office</option>
                        <option value="Bed">Bedroom</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-300">
                        Price ($)
                    </label>
                    <input
                        type="number"
                        id="price"
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
                        placeholder="Describe your furniture"
                        rows="4"
                        className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-300">
                        Image Url:
                    </label>
                    <input type="text" name="image" className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none text-white" />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Add Product
                </button>
            </form>
        </div>
        </div>
   );
}