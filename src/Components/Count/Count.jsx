import style from './Count.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

export const Count = ({className, count, handleIncrement, handleDecrement}) => (
	<div className={cn(style.count, className)}>
		<button type="button" className={style.item} onClick={handleDecrement}>
			-
		</button>
		<span className={cn(style.item, style.number)}>{count}</span>
		<button type="button" className={style.item} onClick={handleIncrement}>
			+
		</button>
	</div>
);

Count.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number,
	handleIncrement: PropTypes.func,
	handleDecrement: PropTypes.func,
}