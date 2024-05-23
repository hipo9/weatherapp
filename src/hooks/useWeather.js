import { useContext } from 'react';
import { mapDataToWheater } from '../utils/mapWheater';
import { WeatherContext } from '../context/WeatherContext';



export const useWeather = () => {
    const { weather, setWeather, setIsLoading, isLoading, setIsDataLoaded, isDataLoaded } = useContext( WeatherContext );

    const getWeather = ( city = '', country = '' ) => {
        setIsLoading( true );
        if ( !country.length && !city.length ) return;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=0f1fbd6d9f1793b2e6187a1c076db444&units=metric`
        https://api.openweathermap.org/data/2.5/weather?q=Madrid,Espa%C3%B1a&appid=0f1fbd6d9f1793b2e6187a1c076db444&units=metric
        fetch( url ).
            then( res => res.json() ).
            then( data => {
                console.log( data );
                const newWeatherData = mapDataToWheater( data );
                console.log( newWeatherData );
                setWeather( newWeatherData );
                setIsLoading( false );
                setIsDataLoaded( true );
                return newWeatherData;

            } )
            .catch( () => setIsLoading( false ) )
            .finally( () => setIsLoading( false ) );
    }


    return { getWeather, weather, isDataLoaded, isLoading, setIsDataLoaded }
}