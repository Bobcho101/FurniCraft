import { useEffect, useState } from "react"

export const useGetUserInfo = (accessToken) => {
    const [ userData, setUserData ] = useState({}); 
    useEffect(() => {
        fetch('http://localhost:3030/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            }
        })
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => console.log(err))
    }, [accessToken]);

    return [userData];
}