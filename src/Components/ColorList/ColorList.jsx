import PropTypes from 'prop-types';
import style from './ColorList.module.scss';
import {useSelector} from 'react-redux';
import {Color} from './Color/Color';

export const ColorList = ({colors}) => {
	const {colorList} = useSelector(state => state.color);

	return (
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
};