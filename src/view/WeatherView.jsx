import React, { useEffect } from 'react';
import { Form, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import { Loading, Details } from '../components';
import stl from './weatherView.module.scss';

export const WeatherView = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const objInput = location.state;
	const { getWeather, weather, isLoading, isDataLoaded, setIsDataLoaded } =
		useWeather();
	console.log(isDataLoaded);
	useEffect(() => {
		getWeather(objInput.city, objInput.country);
	}, []);

	const handleClick = () => {
		navigate('/home', { replace: true });
	};

	return (
		<section className={stl.view}>
			<header className={stl.view__header}>
				<div className={stl.view__containerBtn}>
					<button onClick={handleClick} className={stl.view__back}>
						<img src='./assets/arrow.png' alt='icon-arrow' />
					</button>
					<h1 className={stl.view__title}>ClimaApp</h1>
				</div>
				<img
					className={stl.view__img}
					src='./assets/cloud2.png'
					alt='imagen del clima'
				/>
			</header>

			{isLoading ? <Loading /> : <Details objDataWeather={weather} />}
		</section>
	);
};
