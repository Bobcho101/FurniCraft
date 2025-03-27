import { Link } from "react-router";

export default function Order() {
   return (
       <>
       <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10">
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Confirm Your Order</h2>
        
        <div className="mb-6 flex flex-col items-center">
            <img src="furniture-image.jpg" alt="Furniture Name" className="w-40 h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold">Furniture Name</h3>
            <p className="text-lg text-gray-300">Category</p>
            <p className="text-xl font-bold text-white mt-2">$Price</p>
        </div>

        <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none" />
            <input type="text" placeholder="Shipping Address" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none" />
            <input type="text" placeholder="Phone Number" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none" />
            <select className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none">
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Cash on Delivery</option>
            </select>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-500">
                Place Order
            </button>
        </form>

        <div className="mt-5 text-center">
            <Link to="/catalog/1" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Back to Catalog
            </Link>
        </div>
    </div>
</div>

       </>
   );
}