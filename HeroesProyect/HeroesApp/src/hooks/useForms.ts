import { ChangeEvent, useState } from "react";

interface FormsValues {
    [key : string]: string | number;
}
export const useForm = <T extends FormsValues>( initialValues : T)=>{
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = ( event : ChangeEvent<HTMLInputElement>)=>{
        const {value , name } = event.target;
        setValues({...values , [`${name}`] : value});
    }

    const resetForm = ()=> {
        setValues(initialValues);
    };

    return{
        values,
        handleChange,
        resetForm,
    };
}