import { useEffect, useState } from "react"

export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/furniture')
            .then(res => res.json())
            .then(data => setGames(data.results))
    }, []);

    return [games];
}