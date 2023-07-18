import {NavLink} from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';
import {useSelector} from 'react-redux';

export const Category = () => {
	const {activeGender, categories} = useSelector(state => state.navigation);

	return (
		<ul className={style.category}>
			{categories[activeGender]?.list?.map(category => (
				<li key={category.slug}>
					<NavLink
						className={({isActive}) => cn(style.link, isActive && style.linkActive)}
						to={`/catalog/${activeGender}/${category.slug}`}>
						{category.title}
					</NavLink>
				</li>
			))}
		</ul>
	);
};