import React from 'react';
import stl from './weatherLayout.module.scss';

export const WeatherLayout = ({ children }) => {
	return <div className={stl.layout}>{children};</div>;
};
