import PropTypes from 'prop-types';
import style from './ColorList.module.scss';
import {useSelector} from 'react-redux';
import {Color} from './Color/Color';
import {ColorLabel} from './ColorLabel/ColorLabel';

export const ColorList = ({colors, selectedColor, handleColorChange}) => {
	const {colorList} = useSelector(state => state.color);

	return handleColorChange ? (
		<div className={style.colorList}>
			{colors?.map((id, idx) => {
				const color = colorList.find(color => color.id === id);
				return (
					<ColorLabel
						key={id}
						color={color}
						check={!idx}
						selectedColor={selectedColor}
						handleColorChange={handleColorChange}
					/>
				);
			})}
		</div>
	) :
		(
			<ul className={style.colorList}>
				{colors.map((id, idx) => {
					const color = colorList.find(color => color.id === id);
					return <Color key={id} color={color?.code} check={!idx} />;
				})}
			</ul>
		);
};

ColorList.propTypes = {
	colors: PropTypes.arrayOf(PropTypes.number),
	selectedColor: PropTypes.string,
	handleColorChange: PropTypes.func,
};