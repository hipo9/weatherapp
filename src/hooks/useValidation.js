import { useState } from 'react';

export const useValidation = () => {

    const [errorMsg, setErroMessage] = useState( '' );
    const inputsValidation = ( { country, city } ) => {
        console.log(country, city);
        if ( ( !country, !city ) ) {
            setErroMessage( 'no hay pase mi rey' );
            return false;
        }
        if ( city.length < 2 ) {
            setErroMessage( 'Ingrese mas de 2 caracteres' );
            return false;
        }

        const regex = /^[A-Za-z\s]+$/;
        if ( !regex.test( city ) ) {
            
            setErroMessage( 'Ingresa un nombre valido' );
            return false;
        }

        return true;
    }

    return { errorMsg, inputsValidation };
};