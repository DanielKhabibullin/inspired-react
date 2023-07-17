import {Navigation} from './Navigation/Navigation';
import {Top} from './Top/Top';
import style from './Header.module.scss';


export const Header = () => (
	<header className={style.header}>
		<Top />
		<Navigation />
	</header>
);
