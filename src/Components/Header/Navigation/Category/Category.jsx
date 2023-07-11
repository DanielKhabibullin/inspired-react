import {NavLink, useLocation} from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

const list = [
	{
		link: 'women',
		title: 'Женщины',
		categories: [
			{link: 'bras', title: 'Бюстгальтеры'},
			{link: 'panties', title: 'Трусы'},
			{link: 'socks', title: 'Носки'},
			{link: 'bathrobes', title: 'Халаты'},
			{link: 'thermal', title: 'Термобелье'},
			{link: 'pajamas', title: 'Пижамы'},
		],
	},
	{
		link: 'men',
		title: 'Мужчины',
		categories: [
			{link: 'panties', title: 'Трусы'},
			{link: 'socks', title: 'Носки'},
			{link: 'bathrobes', title: 'Халаты'},
			{link: 'thermal', title: 'Термобелье'},
		],
	},
];

export const Category = () => {
	const location = useLocation();
	const gender = location.pathname.split('/')[1] || 'women';

	const categoriesList = list.find(item => item.link === gender);

	return (
		<ul className={style.category}>
			{categoriesList.categories.map(category => (
				<li key={category.link}>
					<NavLink
						className={({ isActive }) => cn(style.link, isActive && style.linkActive)}
						to={`${gender}/${category.link}`}>
						{category.title}
					</NavLink>
				</li>
			))}
		</ul>
	);
};