import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Form } from '../components/Form';
import { WeatherView } from '../view/';

export const RouterApp = () => {
	return (
		<Routes>
			<Route path='/home' element={<Form />} />
			<Route path='/*' element={<Form />} />
			<Route path='/weather' element={<WeatherView />} />
		</Routes>
	);
};
