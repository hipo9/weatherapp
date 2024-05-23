import { useEffect, useRef, useState } from 'react';
import { WeatherContext } from './WeatherContext';

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState();
	const [isLoading, setIsLoading] = useState();
	const [isDataLoaded, setIsDataLoaded] = useState(false);

	return (
		<WeatherContext.Provider
			value={{
				weather,
				setWeather,
				isLoading,
				setIsLoading,
				isDataLoaded,
				setIsDataLoaded,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
