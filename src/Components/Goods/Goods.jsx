import {useSelector} from 'react-redux';
import {Container} from '../Layout/Container/Container'
import {Product} from '../Product/Product'
import style from './Goods.module.scss';
import PropTypes from 'prop-types';

export const Goods = ({title}) => {
	const {goodsList} = useSelector(state => state.goods);

	return (
		<section>
			<Container>
				<h2 className={style.title}>{title ?? 'Новинки'}</h2>
					<ul className={style.list}>
						{goodsList.map(item => (
							<li key={item.id}>
								<Product {...item} />
							</li>
						))}
					</ul>
			</Container>
		</section>
	)
}

Goods.propTypes = {
	title: PropTypes.string,
};