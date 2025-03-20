import { useLogout } from "../../api/authApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Navigate } from "react-router";

export default function Logout() {
    const [ logout ] = useLogout();
    const { accessToken, userLogoutHandler } = useContext(UserContext);
    let successfulReq = true;

    const logoutHandler = async () => {
        const response = await logout(accessToken);
        if(response.error){
            successfulReq = false;
            alert(response.error);
        } 
    };

    logoutHandler();
    userLogoutHandler();

    return(
    <>
        { successfulReq ? <Navigate to={'/'} /> :  <Navigate to={'/login'} />}
    </>)
}