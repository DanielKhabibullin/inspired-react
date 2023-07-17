import style from './Color.module.scss';
import cn from 'classnames';

// eslint-disable-next-line react/prop-types
export const Color = ({color, check}) => (
	<li className={cn(style.color, check && style.colorCheck)} style={{ '--data-color': color }}></li>
);
