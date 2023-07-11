import {Container} from '../../Layout/Container/Container';
import {Category} from './Category/Category';
import {Gender} from './Gender/Gender';
import style from './Navigation.module.scss';

export const Navigation = () => (
	<nav className={style.navigation}>
		<Container>
			<Gender />
			<Category />
		</Container>
	</nav>
);