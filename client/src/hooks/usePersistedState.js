import { useState } from "react";

export default function usePersistedState(stateKey, initialState) {
    const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(stateKey);
        if (storageValue) {
            return JSON.parse(storageValue);
        } else {
            return initialState;
        }

    });

    const setPersistedState = (newState) => {
        const persistedData = JSON.stringify(newState);
        localStorage.setItem(stateKey, persistedData);
        
        setState(newState);
    }

    return [state, setPersistedState];
}