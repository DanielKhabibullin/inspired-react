import style from './Main.module.scss';
import PropTypes from 'prop-types';

export const Main = ({children}) => <main className={style.main}>{children}</main>;

Main.propTypes = {
	children: PropTypes.node.isRequired,
};
