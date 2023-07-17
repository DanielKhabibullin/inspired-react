import style from './Product.module.scss';
import {NavLink} from 'react-router-dom';
import {API_URL} from '../../const';
import {ColorList} from '../ColorList/ColorList';
import {ReactComponent as Favorite} from '../../assets/favorites.svg';

// eslint-disable-next-line react/prop-types
export const Product = ({id, pic, title, price, colors}) => (
	<article className={style.product}>
		<NavLink to={`product/${id}`} className={style.link}>
			<img src={`${API_URL}/${pic}`} alt={title} className={style.image} />
			<h3 className={style.title}>{title}</h3>
		</NavLink>
		<div className={style.row}>
			<p className={style.price}>руб {price}</p>
			<button className={style.favorite}>
				<Favorite />
			</button>
		</div>
		<ColorList colors={colors} />
	</article>
);