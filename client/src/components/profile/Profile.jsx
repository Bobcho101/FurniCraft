import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/userContext";
import { useGetUserInfo } from "../../api/userApi";

export default function Profile() {
    const navigate = useNavigate();
    const { accessToken } = useContext(UserContext);
    const [ userInfo ] = useGetUserInfo(accessToken);

    const redirectToLogout = () => {
        navigate('/logout');
    }


    return (
        <div className="bg-gray-900 text-white min-h-screen flex justify-center py-12 px-6">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full mt-20">
                
                <div className="flex flex-col items-center">
                    <img 
                        src={userInfo.image}
                        alt="Profile" 
                        className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
                    />
                    <h2 className="text-3xl font-semibold mt-4">{userInfo.username}</h2>
                    <p className="text-indigo-400 text-lg">{userInfo.email}</p>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6">
                    <h3 className="text-xl font-semibold">Your Orders</h3>
                    <div className="mt-4">
                        <div className="bg-gray-700 p-4 rounded-md shadow-md flex justify-between items-center">
                            <p>Wooden Chair - $120</p>
                            <button className="text-indigo-400 cursor-pointer hover:text-indigo-300">View</button>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-md shadow-md flex justify-between items-center mt-3">
                            <p>Modern Sofa - $550</p>
                            <button className="text-indigo-400 cursor-pointer hover:text-indigo-300">View</button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button onClick={redirectToLogout} className="px-6 py-2 bg-red-600 rounded-md hover:bg-red-500">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
