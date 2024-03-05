import React, { useContext } from 'react'
import stl from './details.module.scss';
import { WeatherContext } from '../context/WeatherContext';
import { useLocation } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';

export const Details = ({ objDataWeather }) => {
    if (!objDataWeather) return;
    const {
        city, temperature, feelsLike,
        description, tempMin, tempMax,
        humidity, windSpeed, pressure } = objDataWeather;
    
    return (
        <div className={stl.description}>
            {/*<button onClick={handleClick}>click</button>*/}
            <div className={stl.description__col}>
                <h2 className={stl.description__city}>{city}</h2>
                <strong className={stl.description__degree}>
                    {temperature}°
                </strong>
                <p className={stl.description__feelsLike}>
                    FeelsLike: {feelsLike}
                </p>
                <p className={stl.description__status}>
                    {description}
                </p>
                <p className={stl.description__minMax}>
                    Min: {tempMin}° | Max: {tempMax}°
                </p>
            </div>

            <div className={`${stl.description__col} ${stl.description__colBottom}`}>
                <ul className={stl.items}>
                    <li className={stl.item}>
                        <h3 className={stl.item__title}>Humidity</h3>
                        <span className={stl.item__span}>{humidity}%</span>
                    </li>
                    <li className={stl.item}>
                        <h3 className={stl.item__title}>Pressure</h3>
                        <span className={stl.item__span}>{pressure}hPa</span>
                    </li>
                    <li className={stl.item}>
                        <h3 className={stl.item__title}>Wind Speed</h3>
                        <span className={stl.item__span}>{windSpeed}K/H</span>

                    </li>
                </ul>
            </div>

        </div>
    )
}
