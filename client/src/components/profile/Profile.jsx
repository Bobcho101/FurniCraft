import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/userContext";
import { useGetUserInfo } from "../../api/userApi";
import { useIsUser } from "../../guards/routeGuards";
import { useGetUserOrders } from "../../api/ordersApi";
import { useGetUserPosts } from "../../api/furnitureApi";

export default function Profile() {
    const navigate = useNavigate();
    const { accessToken, _id } = useContext(UserContext);
    const [ userPosts, loading ] = useGetUserPosts(_id);
    const [ userOrders ] = useGetUserOrders(_id);
    const [ userInfo ] = useGetUserInfo(accessToken);

    const isUser = useIsUser(accessToken);
    
    useRouteGuard(isUser, navigate);
    
    const redirectToLogout = () => {
        navigate('/logout');
    }

    const navigateToPostDetails = (postId) => {
        navigate(`/catalog/${postId}/details`);
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex justify-center py-12 px-6">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full mt-20">
                
                <div className="flex flex-col items-center">
                    <img 
                        src={userInfo.image}
                        alt="Profile" 
                        className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md object-cover"
                    />
                    <h2 className="text-3xl font-semibold mt-4">{userInfo.username}</h2>
                    <p className="text-indigo-400 text-lg">{userInfo.email}</p>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6">
                    <h3 className="text-xl font-semibold">Your Posts</h3>
                    <div className="mt-4">   
                    {loading 
                    ? (<div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
                        <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
                    </div>)
                    : userPosts.length > 0 ? (
                        userPosts.map((post) => 
                        <div key={post._id} className="bg-gray-700 mt-1.5 p-4 rounded-md shadow-md flex justify-between items-center">
                            <p>{post.name} - ${post.price}</p>
                            <button onClick={() => navigateToPostDetails(post._id)} className="text-indigo-400 cursor-pointer hover:text-indigo-300">View</button>
                        </div>)
                    ) : (<p className="text-gray-400">No posts found.</p>)
                }
                   
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6">
                    <h3 className="text-xl font-semibold">Your Orders</h3>
                    <div className="mt-4">   
                    {loading 
                    ? (<div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
                        <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
                    </div>)
                    : userOrders.length > 0 ? (
                        userOrders.map((post) => 
                        <div key={post._id} className="bg-gray-700 mt-1.5 p-4 rounded-md shadow-md flex justify-between items-center">
                            <p>{post.name} - ${post.price} x {post.count} {`( $${post.price * post.count} )`}</p>
                            <button onClick={() => navigateToPostDetails(post.furnitureId)} className="text-indigo-400 cursor-pointer hover:text-indigo-300">View</button>
                        </div>)
                    ) : (<p className="text-gray-400">No orders found.</p>)
                }
                   
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button onClick={redirectToLogout} className="px-6 py-2 cursor-pointer bg-red-600 rounded-md hover:bg-red-500">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}


const useRouteGuard = (isUser, navigate) => {
    useEffect(() => {
        if(!isUser){
            navigate('/login');
        }
    }, [isUser, navigate]);
}