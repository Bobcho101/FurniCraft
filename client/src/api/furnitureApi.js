import { useEffect, useState } from "react"
import { failedCreatingFurnitureMsg, failedDeletingFurnitureMsg, failedUpdatingFurnitureMsg } from "../helpers/errorHandlingMsg";
import { ITEMS_PER_PAGE } from "../utils/constants";
const baseUrl = 'http://localhost:3030/data/furniture';

const sortOptionsQueries = {
    'price-low-to-high': 'sortBy=price',
    'price-high-to-low': 'sortBy=price%20desc',
    'name-a-to-z': 'sortBy=name',
    'name-z-to-a': 'sortBy=name%20desc',
    'new-to-old': 'sortBy=_createdOn%20desc',
    'old-to-new': 'sortBy=_createdOn',
};


export const useFurniture = (sortOption, currentPage, searchOption) => {
    const [furniture, setFurniture] = useState([]);
    const [allFurnitureLength, setAllFurnitureLength] = useState(0);
    const paginationQuery = `offset=${(currentPage - 1) * ITEMS_PER_PAGE }&pageSize=${ITEMS_PER_PAGE}`;
    const searchQuery = `?where=name%20LIKE%20%22${searchOption}%22`;

    let finalUrl = '';
    if(searchOption){
        finalUrl = baseUrl + searchQuery + '&' + sortOptionsQueries[sortOption] + '&' + paginationQuery;
    } else{
        finalUrl = baseUrl + '?' + sortOptionsQueries[sortOption] + '&' + paginationQuery;
    }
    

    useEffect(() => {
        fetch(finalUrl)
            .then(res => res.json())
            .then(data => setFurniture(data))
            .catch(err => console.log(err))

        fetch(baseUrl + searchQuery)
            .then(res => res.json())
            .then(data => setAllFurnitureLength(data.length))
            .catch(err => console.log(err))
       
    }, [finalUrl, searchQuery]);

    return [furniture, allFurnitureLength];
}

export const useRecommendedFurniture = (category, furnitureId) => {
    const [recommendedFurniture, setRecommendedFurniture] = useState([]);

    const categoryFilterQuery = `?where=category%20LIKE%20%22${category}%22`;

    useEffect(() => {
        fetch(baseUrl + categoryFilterQuery)
            .then(res => res.json())
            .then(data => setRecommendedFurniture(data))
            .catch(err => console.log(err))

    }, [categoryFilterQuery])

    const filteredRecommendedFurniture = recommendedFurniture.filter(curItem => curItem._id !== furnitureId);
    const result = filteredRecommendedFurniture.slice(0, 3);

    return [result];
}

// export const useOneFurniture = (furnitureId) => {
//     const [furniture, setFurniture] = useState({});

//     useEffect(() => {
//         fetch(baseUrl + '/' + furnitureId)
//             .then(res => res.json())
//             .then(data => setFurniture(data))
//             .catch(err => console.log(err))

//     }, [furnitureId]);


//     return [furniture];
// }

export const fetchOneFurniture = async (furnitureId) => {
    try {
        const response = await fetch(baseUrl + '/' + furnitureId);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err.message); 
    }
};


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

export const useEditFurniture = () => {
    const edit = async (furnitureId, newData, accessToken) => {
        try{
            const response = await fetch(baseUrl + '/' + furnitureId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken,
                },
                body: JSON.stringify(newData),
            });
            
            if(!response.ok){
                return {
                    error: failedUpdatingFurnitureMsg, 
                }
            }
            const data = await response.json();
            return { data };
        } catch(err){
            console.log(err.message);
        }
    };

    return [ edit ];
};


export const useDeleteFurniture = () => {
    const deleteFunction = async (furnitureId, accessToken) => {
        try{
            const response = await fetch(baseUrl + '/' + furnitureId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken,
                },
            });
            
            if(!response.ok){
                return {
                    error: failedDeletingFurnitureMsg, 
                }
            }
            const data = await response.json();
            return { data };
        } catch(err){
            console.log(err.message);
        }
    };
    return [ deleteFunction ];
};
