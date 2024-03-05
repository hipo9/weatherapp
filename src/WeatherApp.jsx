import React from 'react';
import { WeatherLayout } from './layout/WeatherLayout';
import { RouterApp } from './router/';

export const WeatherApp = () => {
	return (
		<>
			<WeatherLayout>

				<main className='container'>
					<RouterApp />
				</main>
			</WeatherLayout>
		</>
	);
};
