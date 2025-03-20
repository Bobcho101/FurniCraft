import { useEffect, useState } from "react"

export const useFurniture = () => {
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/furniture')
            .then(res => res.json())
            .then(data => setFurniture(data))
    }, []);

    return [furniture];
}