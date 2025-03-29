import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { fetchOneFurniture } from "../../api/furnitureApi";
import { useIsUser } from "../../guards/routeGuards";
import { checkIsOwner } from "../../utils/miniAuthorizations";
import { UserContext } from "../../contexts/userContext";
import OrderSuccess from "./OrderSuccess";
import { checkForEmptyField } from "../../utils/formUtils";
import { emptyFieldsMsg } from "../../helpers/errorHandlingMsg";
import useForm from "../../hooks/useForm";

export default function Order() {
    const { itemId } = useParams();
    const [ isOrderSuccessActive, setIsOrderSuccessActive] = useState(false);
    const [ furniture, setFurniture ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const { _id, accessToken } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const furniturePrice = location.state?.furniturePrice;
    const [formValues, changeFormValues] = useForm({
        'name': '',
        'address': '',
        'phoneNumber': '',
        'payment': 'creditCard',
    });

    const isUser = useIsUser(accessToken);
    const isOwner = checkIsOwner(_id, furniture._ownerId);

    useRouteGuard(isUser, isOwner, navigate);


    const getFurniture = async (furnitureId) => {
        try{
            const data = await fetchOneFurniture(furnitureId);
            setFurniture(data);
            setLoading(false);
        } catch(err){
            console.log(err.message);
            setLoading(false);
        }
    };

    const orderFormSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
        

        if(checkForEmptyField(formValues)){
            return alert(emptyFieldsMsg);
        }
        
        setIsOrderSuccessActive(true);
    }

    useEffect(() => {
        getFurniture(itemId);
    }, [itemId]); 

    useEffect(() => {
        if(!furniturePrice && !loading){
            navigate(`/catalog/${furniture._id}/details`)   
        }
    }, [furniturePrice, furniture._id, navigate, loading]);

    

    return (
        <>
        { isOrderSuccessActive ?
        <OrderSuccess />
        : loading 
            ? 
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
            </div>
            : <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10">
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-3xl w-full mt-20">
                <h2 className="text-3xl font-bold mb-6 text-center">Confirm Your Order</h2>
                
                <div className="mb-6 flex flex-col items-center">
                    <img src={furniture.image} alt="Furniture Name" className="w-40 h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold">{furniture.name}</h3>
                    <p className="text-lg text-indigo-400">{furniture.category}</p>
                    <p className="text-xl font-bold text-white mt-2">${furniturePrice}</p>
                </div>

                <form onSubmit={orderFormSubmit} className="flex flex-col gap-4">
                    <input onChange={changeFormValues} value={formValues.name} type="text" name="name" placeholder="Full Name" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none" />
                    <input onChange={changeFormValues} value={formValues.address} type="text" name="address" placeholder="Shipping Address" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none" />
                    <input onChange={changeFormValues} value={formValues.phoneNumber} type="text" name="phoneNumber" placeholder="Phone Number" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none" />
                    <select onChange={changeFormValues} name="payment" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none">
                        <option value="creditCard">Credit Card</option>
                        <option value="pay-pal">PayPal</option>
                        <option value="cash">Cash on Delivery</option>
                    </select>
                    <button type="submit" className="w-full bg-indigo-600 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-indigo-500">
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
        }
        </>
    );
};

const useRouteGuard = (isUser, isOwner, navigate) => {
    useEffect(() => {
        if(!isUser){
            navigate('/login');
        }
        if(isOwner){
            navigate('/');
        }
    }, [isUser, navigate, isOwner]);
}