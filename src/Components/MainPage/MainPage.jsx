import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGoods} from '../../features/goodsSlice';
import {Container} from '../Layout/Container/Container';
import {Product} from '../Product/Product';
import style from './MainPage.module.scss';

// eslint-disable-next-line react/prop-types
export const MainPage = ({gender = 'women'}) => {
	const dispatch = useDispatch();
	const {goodsList} = useSelector(state => state.goods);

	useEffect(() => {
		dispatch(fetchGoods(gender));
	},[gender, dispatch]);
	return (
		<section>
			<Container>
				<h2 className={style.title}>Новинки</h2>
					<ul className={style.list}>
						{goodsList.map(item => (
							<li key={item.id}>
								<Product {...item} />
							</li>
						))}
					</ul>
			</Container>
		</section>
	);
};