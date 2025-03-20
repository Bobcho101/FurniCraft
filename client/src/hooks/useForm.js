import { useState } from "react";

const useForm = (initValues) => {
    const [values, setValues] = useState(initValues);
    
    const changeHandler = (e) => {
        setValues((curValues) => ({
            ...curValues,
            [e.target.name]: e.target.value
        }));
    };

    return [values, changeHandler];
};


export default useForm;