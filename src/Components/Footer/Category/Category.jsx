import {NavLink} from 'react-router-dom';
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


export const Category = () => (
	<div className={style.category}>
		<h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>
		<ul className={style.categoryList}>
			{list.map(item => (
				<li key={item.link} className={style.categoryItem}>
					<h3 className={style.categorySubtitle}>
						<NavLink className={style.link} to={item.link}>
							{item.title}
						</NavLink>
					</h3>
					<ul className={style.categorySublist}>
						{item.categories.map(category => (
							<li key={category.link} className={style.categorySubitem}>
								<NavLink className={style.link} to={`${item.link}/${category.link}`}>
									{category.title}
								</NavLink>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	</div>
);
