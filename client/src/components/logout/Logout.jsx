import { useLogout } from "../../api/authApi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Navigate, useNavigate } from "react-router";
import Error from "../error/Error";

export default function Logout() {
    const [ logout ] = useLogout();
    const { accessToken, userLogoutHandler } = useContext(UserContext);
    const [ error, setError ] = useState('');
    const navigate = useNavigate();
    let [ successfulReq, setSuccessfulReq ] = useState(true);

    useEffect(() => {
        const logoutHandler = async () => {
            const response = await logout(accessToken);
            if(response.error){
                setSuccessfulReq(false);
                setError(response.error);
            } 
        };
        
        logoutHandler();
    }, [accessToken, logout, userLogoutHandler]);
    
    
    userLogoutHandler();

    useEffect(() => {
        if(error){
            setTimeout(() => {
                setError('');
                navigate('/login');
            }, 3000)
        }
    }, [error, navigate]);

    return(
    <>
        { successfulReq ? <Navigate to={'/'} /> : error && <Error errorMsg={error} />} {error && <Error errorMsg={error} />}
    </>)
}