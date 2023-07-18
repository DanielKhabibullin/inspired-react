import cn from 'classnames';
import style from './Container.module.scss';
import PropTypes from 'prop-types';

export const Container = ({className, children}) =>
	<div className={cn(style.container, className)}>{children}</div>;

	Container.propTypes = {
		className: PropTypes.string,
		children: PropTypes.node,
	};
