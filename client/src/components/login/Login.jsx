import { Link, useNavigate } from 'react-router';
import useForm from '../../hooks/useForm';
import { useLogin } from '../../api/authApi';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/userContext';
import { emptyFieldsMsg } from '../../helpers/errorHandlingMsg';
import { checkForEmptyField } from '../../utils/formUtils';
import { useIsUser } from '../../guards/routeGuards';


export default function Login() {
    const navigate = useNavigate();
    const { accessToken } = useContext(UserContext);
    const [formValues, changeFormValues, setFormValues] = useForm({
        'email': '',
        'password': '',
    });
    const [ login ] = useLogin();
    const { userLoginHandler } = useContext(UserContext);

    const isUser = useIsUser(accessToken);
    
    useEffect(() => {
        if(isUser){
            navigate('/');
        }
    }, [isUser, navigate]);

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        const { email, password } = formValues;

        const areEmptyFields = checkForEmptyField(formValues);
        if(areEmptyFields) return alert(emptyFieldsMsg);
        
        const userData = await login(email, password);
        
        if(userData.error){
            setFormValues({ password: '' });
            return alert(userData.error);
        };

        userLoginHandler(userData);
        
        return navigate('/');
    }

    return (
        <>
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center relative">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                style={{
                    clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative  left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className="relative z-10 w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center">Login</h2>

                <form onSubmit={loginSubmitHandler} className="mt-6">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    onChange={changeFormValues}
                    value={formValues.email}
                    name="email"
                    placeholder="Enter your email"
                    className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={changeFormValues}
                    value={formValues.password}
                    placeholder="Enter your password"
                    className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Log In
                </button>
                </form>

                <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-indigo-400 hover:text-indigo-300">
                    Register here
                    </Link>
                </p>
                </div>
            </div>
        </div>
    </>
    );
}
