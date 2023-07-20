import {Container} from '../../Layout/Container/Container';
import style from './Top.module.scss';
import logo from '/src/assets/logo.svg';
import {ReactComponent as Search} from '../../../assets/search.svg';
import {ReactComponent as Cart} from '../../../assets/cart.svg';
import {ReactComponent as Favorite} from '../../../assets/favorites.svg';

import cn from 'classnames';
import {NavLink} from 'react-router-dom';

export const Top = () => (
	<div className={style.top}>
		<Container className={style.container}>
			<a className={cn(style.link, style.phone)} href="tel:89304902620">
				8 930 490 26 20
			</a>
			<NavLink to="/" className={style.logo}>
				<img src={logo} alt="Logo Inspired" />
			</NavLink>
			<div className={style.navigation}>
				<ul className={style.navList}>
					<li className={style.navItem}>
						<button type="button" className={style.link}>
							<Search />
						</button>
					</li>
					<li className={style.navItem}>
						<NavLink to="/cart" className={style.link}>
							<Cart />
						</NavLink>
					</li>
					<li className={style.navItem}>
						<NavLink to="/favorite" className={cn(style.link, style.favorite)}>
							<Favorite />
						</NavLink>
					</li>
				</ul>
			</div>
		</Container>
	</div>
);
