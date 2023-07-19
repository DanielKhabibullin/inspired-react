import style from './ColorLabel.module.scss';
import PropTypes from 'prop-types';


export const ColorLabel = ({color, check, selectedColor, handleColorChange}) => (
	<label className={style.color} style={{ '--data-color': color?.code }}>
		<input
			type="radio"
			name="color"
			value={color?.title}
			className={style.input}
			checked={selectedColor ? selectedColor === color?.title : check}
			onChange={handleColorChange}
		/>
		<span className={style.colorCheck}></span>
	</label>
);

ColorLabel.propTypes = {
	color: PropTypes.string,
	check: PropTypes.bool,
	selectedColor: PropTypes.string,
	handleColorChange: PropTypes.func,
};