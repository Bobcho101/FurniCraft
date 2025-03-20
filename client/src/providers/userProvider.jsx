import { UserContext } from "../contexts/userContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({
    children
}){
    const [authData, setAuthData] = usePersistedState('auth', {});

    const userLoginHandler = (data) => {
        setAuthData(data);
    }

    return (
        <>
        <UserContext.Provider value={{ ...authData, userLoginHandler }}>
            {children}
        </UserContext.Provider>
        </>
    )
}