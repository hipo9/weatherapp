import { useEffect, useRef, useState } from 'react';
import { WeatherContext } from './WeatherContext';

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState();
	const [isLoading, setIsLoading] = useState();

	return (
		<WeatherContext.Provider
			value={{
				weather,
				setWeather,
                isLoading,
				setIsLoading,
				
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
