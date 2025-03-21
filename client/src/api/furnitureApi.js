import { useEffect, useState } from "react"
import { failedCreatingFurnitureMsg } from "../helpers/errorHandlingMsg";
const baseUrl = 'http://localhost:3030/data/furniture';

export const useFurniture = () => {
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        fetch(baseUrl, {signal: controller.signal})
            .then(res => res.json())
            .then(data => setFurniture(data))

        return(() => {
            controller.abort();
        })
    }, []);

    return [furniture];
}


export const useCreateFurniture = () => {
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
                    error: failedCreatingFurnitureMsg, 
                }
            }
            const data = await response.json();
            return { data };
        } catch(err){
            console.log(err.message);
        }
    };

    return [ create ];
}