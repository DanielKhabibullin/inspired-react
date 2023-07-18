import style from './Color.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

export const Color = ({color, check}) => {
	// const colorRef = useRef(null);
	// useEffect(() => {
	// 	colorRef.current.style.setProperty('--data-color', color);
	// }, [color]);
	
	return (
		<li className={cn(style.color, check && style.colorCheck)} style={{ '--data-color': color }} />
		// ref={colorRef}
	);
};

Color.propTypes = {
	color: PropTypes.string,
	check: PropTypes.bool,
};
