import { useEffect, useState } from "react";
import { failedOrderingFurniture } from "../helpers/errorHandlingMsg";

const baseUrl = 'http://localhost:3030/data/orders';

export const useCreateFurnitureOrder = () => {
    const create = async (newData, accessToken) => {
        try{
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken,
                },
                body: JSON.stringify(newData),
            });
            
            if(!response.ok){
                return {
                    error: failedOrderingFurniture, 
                }
            }
            const data = await response.json();
            return { data };
        } catch(err){
            console.log(err.message);
        }
    };

    return [create];
}

export const useGetUserOrders = (userId) => {
    const [ loading, setLoading ] = useState(true);                
    const [ userOrders, setUserOrders ] = useState([]); 

    useEffect(() => {
        setLoading(true);
        fetch(baseUrl + `?where=_ownerId%3D%22${userId}%22`)
        .then((res) => res.json())
        .then((data) => {
            setUserOrders(data);
            setLoading(false);
        })
        .catch((err) => console.log(err))
    }, [userId]);

    return [userOrders, loading];
}