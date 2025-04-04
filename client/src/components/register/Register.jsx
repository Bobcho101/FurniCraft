import { Link, useNavigate } from 'react-router';
import useForm from '../../hooks/useForm';
import { useRegister } from '../../api/authApi';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { emptyFieldsMsg, missMatchedPasswordsMsg } from '../../helpers/errorHandlingMsg';
import { checkForEmptyField } from '../../utils/formUtils';
import { useIsUser } from '../../guards/routeGuards';
import Error from '../error/Error';
import { setDocumentTitle } from '../../utils/document';
import { motion } from 'framer-motion';

export default function Register() {
    setDocumentTitle("Register")
    const [ register ] = useRegister();
    const { accessToken } = useContext(UserContext);
    const [ error, setError ] = useState('');
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const isUser = useIsUser(accessToken);

    useRouteGuard(isUser, navigate);
    
    const [formValues, changeFormValues, setFormValues ] = useForm({
        'username': '',
        'image': '',
        'email': '',
        'password': '',
        'rePassword': '',
    });


    const registerSubmitHandler = async (e) => {
        e.preventDefault();
        const { username, email, password, image, rePassword } = formValues;

        const areEmptyFields = checkForEmptyField(formValues);
        if(areEmptyFields) return setError(emptyFieldsMsg);

        if(password !== rePassword) return setError(missMatchedPasswordsMsg);

        const userData = await register(username, image, email, password);

        if(userData.error){
            setFormValues({ password: '', rePassword: '' });
            return setError(userData.error); 
        };

        userLoginHandler(userData);
        return navigate('/');
    } 

    useEffect(() => {
        if(error){
            setTimeout(() => {
                setError('');
            }, 3000)
        }
    }, [error]);

    return (
        <>
        {error && <Error errorMsg={error} />}
          
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <motion.div
            className="w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <h2 className="text-3xl font-semibold text-center">Register</h2>
            <form onSubmit={registerSubmitHandler} className="mt-6">
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
                </label>
                <input
                type="text"
                id="username"
                value={formValues.username}
                onChange={changeFormValues}
                name="username"
                placeholder="Enter your username"
                className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="image" className="block text-sm font-medium text-gray-300">
                Profile Image
                </label>
                <input
                type="text"
                id="image"
                name="image"
                value={formValues.image}
                onChange={changeFormValues}
                placeholder="Enter image URL"
                className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
                </label>
                <input
                type="email"
                id="email"
                value={formValues.email}
                onChange={changeFormValues}
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
                value={formValues.password}
                onChange={changeFormValues}
                placeholder="Enter your password"
                className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="rePassword" className="block text-sm font-medium text-gray-300">
                Repeat Password
                </label>
                <input
                type="password"
                id="rePassword"
                name="rePassword"
                value={formValues.rePassword}
                onChange={changeFormValues}
                placeholder="Repeat password"
                className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
            </div>
            <button
                type="submit"
                className="w-full cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Sign Up
            </button>
            </form>

            <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-400 hover:text-indigo-300">
                Log in here
                </Link>
            </p>
            </div>
        </motion.div>
        </div>
        </>
    );
}


const useRouteGuard = (isUser, navigate) => {
    useEffect(() => {
        if(isUser){
            navigate('/');
        }
    }, [isUser, navigate]);
}