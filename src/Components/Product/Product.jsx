import style from './Product.module.scss';
import {NavLink} from 'react-router-dom';
import {API_URL} from '../../const';
import {ColorList} from '../ColorList/ColorList';
import PropTypes from 'prop-types';
import {BtnFavorite} from '../BtnFavorite/BtnFavorite';


export const Product = ({id, pic, title, price, colors}) => (
	<article className={style.product}>
		<NavLink to={`/product/${id}`} className={style.link}>
			<img src={`${API_URL}/${pic}`} alt={title} className={style.image} />
			<h3 className={style.title}>{title}</h3>
		</NavLink>
		<div className={style.row}>
			<p className={style.price}>руб {price}</p>
			<BtnFavorite id={id}/>
		</div>
		<ColorList colors={colors} />
	</article>
);

Product.propTypes = {
	id: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	colors: PropTypes.arrayOf(PropTypes.number),
};