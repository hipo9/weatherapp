import { json } from 'react-router-dom';


export const setItemData = ( key, data ) => {
    localStorage.setItem( key, JSON.stringify( data ) );

}



export const getItemData = ( key ) => {
    const data = localStorage.getItem( key );
    return data ? JSON.parse( data ) : null;
}

