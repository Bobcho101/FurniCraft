import { UserContext } from "../contexts/userContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({
    children
}){
    const [authData, setAuthData] = usePersistedState('auth', {});

    const userLoginHandler = (data) => {
        setAuthData(data);
    }

    const userLogoutHandler = () => {
        setAuthData({});
    }

    return (
        <>
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
        </>
    )
}