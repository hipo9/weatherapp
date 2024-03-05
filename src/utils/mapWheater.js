


export const mapDataToWheater = ( data ) => {

    if ( !data ) throw new Error( 'data vacio: en el helplers/wheader.js' );
    const newData = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        city: data.name,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        feelsLike: data.main.feels_like,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed

    }


    return newData
};
