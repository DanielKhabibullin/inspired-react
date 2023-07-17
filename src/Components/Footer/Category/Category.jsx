import {NavLink} from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';
import {useSelector} from 'react-redux';


export const Category = () => {
	const {genderList, categories} = useSelector(state => state.navigation);

	return (
		<div className={style.category}>
			<h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>
			<ul className={style.categoryList}>
				{genderList.map(gender => (
					<li key={gender} className={style.categoryItem}>
						<h3 className={style.categorySubtitle}>
							<NavLink className={style.link} to={gender}>
								{categories[gender].title}
							</NavLink>
						</h3>
						<ul className={style.categorySublist}>
							{categories[gender]?.list?.map(category => (
								<li key={category.slug} className={style.categorySubitem}>
									<NavLink className={style.link} to={`${gender}/${category.slug}`}>
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
}
