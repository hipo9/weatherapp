import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherApp } from './src/WeatherApp';
import './src/scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from './src/context/WeatherProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//<React.StrictMode>
	<WeatherProvider>
		<BrowserRouter>
			<WeatherApp />
		</BrowserRouter>
	</WeatherProvider>
	//</React.StrictMode>
);
