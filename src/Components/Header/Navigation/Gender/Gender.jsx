import style from './Gender.module.scss';
import cn from 'classnames';
import {NavLink, useLocation} from 'react-router-dom';

const list = [
	{link: 'women', title: 'Women'},
	{link: 'men', title: 'Men'},
];

export const Gender = () => {
	const location = useLocation();
  const isFirstLoad = location.pathname === '/';
	return (
		<ul className={style.gender}>
			{list.map(item => (
				<li key={item.link} className={style.item}>
					<NavLink
						to={item.link}
						className={({ isActive }) =>
							cn(style.link, (isActive || (isFirstLoad && item.link === 'women')) && style.linkActive)
						}>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	);
};
