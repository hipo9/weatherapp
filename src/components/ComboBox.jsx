import React from 'react';
import stl from './comboBox.module.scss';

export const ComboBox = () => {
    
	return (
		<div className={stl.combo}>
			<select id='country' name='country' className={stl.combo__select}>
				<option className={stl.combo__opt} value='mexico'>
					México
				</option>
				<option className={stl.combo__opt} value='argentina'>
					Agentina
				</option>
				<option className={stl.combo__opt} value='chile'>
					Chile
				</option>
			</select>
		</div>
	);
};
