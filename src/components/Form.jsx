import React, { useState } from 'react';
import stl from './form.module.scss';
import { useNavigate } from 'react-router-dom';
import { ComboBox } from './ComboBox';
import { useValidation } from '../hooks/useValidation';

export const Form = () => {
	const navigate = useNavigate();
	const { errorMsg, inputsValidation } = useValidation();
	//const [errorMsg, setErroMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const city = formData.get('city');
        const country = formData.get( 'country' );
        
		if (!inputsValidation({ country, city })) return;
		navigate(`/weather`, { state: { city, country } });
	};

	return (
		<section className={stl.container}>
			<div>
				<h2 className={stl.container__title}>Weather app</h2>
			</div>

			<form className={stl.form} onSubmit={handleSubmit}>
				<input
					className={stl.form__input}
					type='text'
					placeholder='Ingresa ciudad a buscar...'
					name='city'
				/>

				<ComboBox />

				<button className={stl.form__btn} type='submit'>
					Obtener Clima
				</button>
			</form>
			{errorMsg.length && (
				<div className={stl.form__msg}>
					<p>{errorMsg}</p>
				</div>
			)}
		</section>
	);
};
