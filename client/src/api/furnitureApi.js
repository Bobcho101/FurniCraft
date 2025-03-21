import { useEffect, useState } from "react"
import { failedCreatingFurnitureMsg } from "../helpers/errorHandlingMsg";
const baseUrl = 'http://localhost:3030/data/furniture';

const sortOptionsQueries = {
    'price-low-to-high': '?sortBy=price',
    'price-high-to-low': '?sortBy=price%20desc',
    'name-a-to-z': '?sortBy=name',
    'name-z-to-a': '?sortBy=name%20desc',
};
const itemsPerPage = 2;

export const useFurniture = (sortOption, currentPage) => {
    const [furniture, setFurniture] = useState([]);
    const paginationQuery = `offset=${(currentPage - 1) * itemsPerPage }&pageSize=${itemsPerPage}`;
    useEffect(() => {
        const controller = new AbortController();
        fetch(baseUrl + sortOptionsQueries[sortOption] + '&' + paginationQuery , {signal: controller.signal})
            .then(res => res.json())
            .then(data => setFurniture(data))

        return(() => {
            controller.abort();
        })
    }, [sortOption, paginationQuery]);

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