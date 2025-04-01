import { emailOrUsernameAlreadyExistsMsg, guestCannotLogoutMsg, invalidEmailOrPasswordMsg } from "../helpers/errorHandlingMsg";
import { DOMAIN } from "../utils/constants";

const baseUrl = DOMAIN + '/users';

export const useRegister = () => {
    const register = async (username, image, email, password) => {
        try{
            const response = await fetch(baseUrl + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    image,
                    email,
                    password,
                }),
            });
            if(!response.ok){
                return {
                    error: emailOrUsernameAlreadyExistsMsg,
                };
            }
            const userData = await response.json();
            return userData;
        } catch(err){
            console.log(err.message)
        }
    };

    return [register];
}

export const useLogin = () => {
    const login = async (email, password) => {
        try{
            const response = await fetch(baseUrl + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });
            if(!response.ok){
                return {
                    error: invalidEmailOrPasswordMsg,
                };
            }
            const userData = await response.json();
            return userData;
        } catch(err){
            console.log(err.message)
        }
    };

    return [login];
}

export const useLogout = () => {
    const logout = async (accessToken) => {
        if(!accessToken){
            return {
                error: 'A guest cannot logout!'
            };
        }
        try{
            const response = await fetch(baseUrl + '/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken
                },
            });
            if(!response.ok){
                return {
                    error: guestCannotLogoutMsg,
                };
            }
            const userData = await response.json();
            return { userData} ;
        } catch(err){
            console.log(err.message)
        }
    };
    return [ logout ];
}