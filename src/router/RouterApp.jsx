import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Form } from '../components/Form';
import { WeatherView } from '../view/';
import { Prueba } from '../view/Prueba';

export const RouterApp = () => {
	return (
		<Routes>
			<Route path='/home' element={<Form />} />
			<Route path='/*' element={<Form />} />
			<Route path='/weather' element={<WeatherView />} />
			<Route path='/prueba' element={<Prueba />} />

			{/*<Route path='/weather' Component={<WeatherView />} />
			<Route path='/*' Component={<Form />} />*/}
		</Routes>
	);
};
