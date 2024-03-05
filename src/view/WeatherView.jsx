import React, { useContext, useEffect } from 'react';
import stl from './weatherView.module.scss';
import { Details } from '../components/Details';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import { ColorRing } from 'react-loader-spinner';
import { Loading } from '../components';

export const WeatherView = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const objInput = location.state;
	const { getWeather, weather, isLoading } = useWeather();

	useEffect(() => {
		getWeather(objInput.city, objInput.country);
		console.log(isLoading);
	}, []);

	const handleClick = () => {
		navigate('/home', { replace: true });
	};

	return (
		<section className={stl.view}>
			<header className={stl.view__header}>
				<button onClick={handleClick}>click</button>
				<h1 className={stl.view__title}>ClimaApp</h1>
				<img
					className={stl.view__img}
					src='src/icons/cloud2.png'
					alt='imagen del clima'
				/>
			</header>
			{isLoading ? <Loading /> : <Details objDataWeather={weather} />}
		</section>
	);
};
