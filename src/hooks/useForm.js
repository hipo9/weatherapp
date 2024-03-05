import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

    const [formState, setFormState] = useState( initialState )
    //const handleChange = ( selectedOption ) => {
    //	setSelectedOption(selectedOption);
    //};
    const handleChange = ( e ) => {
        const { value, name } = e.target;
        setFormState( {
            ...formState,
            [name]: value,

        } )


    }

    const handleClearChange = () => {
        formState( initialState )
    }


    return {
        handleChange, handleClearChange, ...formState, formState
    }
}