import { useState } from "react";

const useForm = (initValues) => {
    const [values, setValues] = useState(initValues);
    
    const changeHandler = (e) => {
        setValues((curValues) => ({
            ...curValues,
            [e.target.name]: e.target.value
        }));
    };

    const setFormValues = (newValues) => {
        setValues((curValues) => ({
            ...curValues,
            ...newValues,
        }));
    };

    return [values, changeHandler, setFormValues];
};


export default useForm;