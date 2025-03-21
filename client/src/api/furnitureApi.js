import { useEffect, useState } from "react"
import { failedCreatingFurnitureMsg } from "../helpers/errorHandlingMsg";
import { ITEMS_PER_PAGE } from "../utils/constants";
const baseUrl = 'http://localhost:3030/data/furniture';

const sortOptionsQueries = {
    'price-low-to-high': '?sortBy=price',
    'price-high-to-low': '?sortBy=price%20desc',
    'name-a-to-z': '?sortBy=name',
    'name-z-to-a': '?sortBy=name%20desc',
};


export const useFurniture = (sortOption, currentPage) => {
    const [furniture, setFurniture] = useState([]);
    const [allFurnitureLength, setAllFurnitureLength] = useState(0);
    const paginationQuery = `offset=${(currentPage - 1) * ITEMS_PER_PAGE }&pageSize=${ITEMS_PER_PAGE}`;
    useEffect(() => {
        const controller = new AbortController();
        fetch(baseUrl + sortOptionsQueries[sortOption] + '&' + paginationQuery , {signal: controller.signal})
            .then(res => res.json())
            .then(data => setFurniture(data))

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => setAllFurnitureLength(data.length))

       
    }, [sortOption, paginationQuery]);

    return [furniture, allFurnitureLength];
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