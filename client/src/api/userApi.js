import { useEffect, useState } from "react"
const baseUrl = 'http://localhost:3030';

export const useGetUserInfo = (accessToken) => {
    const [ userData, setUserData ] = useState({}); 
    useEffect(() => {
        fetch(baseUrl + '/users/me', {
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

export const useGetUserPosts = (userId) => {
    const [ loading, setLoading ] = useState(true);                
    const [ userPosts, setUserPosts ] = useState([]); 

    useEffect(() => {
        setLoading(true);
        fetch(baseUrl + `/data/furniture?where=_ownerId%3D%22${userId}%22`)
        .then((res) => res.json())
        .then((data) => {
            setUserPosts(data);
            setLoading(false);
        })
        .catch((err) => console.log(err))
    }, [userId]);


    return [ userPosts, loading ];
}