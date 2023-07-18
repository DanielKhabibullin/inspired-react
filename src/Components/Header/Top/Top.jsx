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
		<Container className={style.topContainer}>
			<a className={cn(style.topLink, style.topPone)} href="tel:89304902620">
				8 930 490 26 20
			</a>
			<NavLink to={`/`} href="" className={style.topLogo}>
				<img src={logo} alt="Logo Inspired" />
			</NavLink>
			<div className={style.topNavigation}>
				<ul className={style.topNavList}>
					<li className={style.topNavItem}>
						<button type="button" className={style.topLink}>
							<Search />
						</button>
					</li>
					<li className={style.topNavItem}>
						<a className={style.topLink}>
							<Cart />
						</a>
					</li>
					<li className={style.topNavItem}>
						<a className={style.topLink}>
							<Favorite />
						</a>
					</li>
				</ul>
			</div>
		</Container>
	</div>
);
