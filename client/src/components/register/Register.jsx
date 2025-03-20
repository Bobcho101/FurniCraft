import { Link, useNavigate } from 'react-router';
import useForm from '../../hooks/useForm';
import { useRegister } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { emptyFieldsMsg, missMatchedPasswordsMsg } from '../../helpers/errorHandlingMsg';

export default function Register() {
    const [ register ] = useRegister();
    const { userLoginHandler }= useContext(UserContext);
    const navigate = useNavigate();
    const [formValues, changeFormValues, setFormValues ] = useForm({
        'username': '',
        'email': '',
        'password': '',
        'rePassword': '',
    });


    const registerSubmitHandler = async (e) => {
        e.preventDefault();
        const { username, email, password, rePassword } = formValues;

        if(username.trim() === '' || 
        email.trim() === '' || 
        password.trim() === '' || 
        rePassword === '') return alert(emptyFieldsMsg);

        if(password !== rePassword) return alert(missMatchedPasswordsMsg)

        const userData = await register(username, email, password);

        if(userData.error){
            setFormValues({ password: '', rePassword: '' });
            return alert(userData.error);
        };

        userLoginHandler(userData);
        return navigate('/');
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Repeat Password
                </label>
                <input
                type="password"
                id="rePassword"
                name="rePassword"
                value={formValues.rePassword}
                onChange={changeFormValues}
                placeholder="Enter your password"
                className="mt-2 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        </div>
        </div>
    );
}
