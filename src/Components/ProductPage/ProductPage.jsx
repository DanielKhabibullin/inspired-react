import style from './ProductPage.module.scss';
import cn from 'classnames';
import {Goods} from '../Goods/Goods';
import {Container} from '../Layout/Container/Container';
import {ReactComponent as Favorite} from '../../assets/favorites.svg';
import {API_URL} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProduct} from '../../features/productSlice';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchCategory} from '../../features/goodsSlice';
import {ColorList} from '../ColorList/ColorList';
import {Count} from '../Count/Count';

export const ProductPage = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const {
		product: {pic, title, price, colors, description, gender, category},
	} = useSelector(state => state.product);
	useEffect(() => {
		dispatch(fetchProduct(id))
	}, [id, dispatch])

	useEffect(() => {
		const recommended = {count: 4, top: true, exclude: id};
		dispatch(fetchCategory({gender, category, ...recommended}));
	}, [gender, category, id, dispatch]);

	const [count, setCount] = useState(1);
	const [selectedColor, setSelectedColor] = useState('');


	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1);
	};
	const handleDecrement = () => {
		if (count > 1) {
			setCount(prevCount => prevCount - 1);
		}
	};

	const handleColorChange = event => {
		setSelectedColor(event.target.value);
	};


	
	return (
		<>
			<section>
				<Container className={style.container}>
					<img src={pic ? `${API_URL}/${pic}` : ''} alt={title} className={style.image} />
					<form className={style.content}>
						<h2 className={style.title}>{title}</h2>
						<p className={style.price}>руб {price}</p>
						<div className={style.vendorCode}>
							<span className={style.subtitle}>Артикул</span>
							<span className={style.id}>{id}</span>
						</div>
						<div className={style.color}>
							<p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
							<ColorList
								colors={colors}
								selectedColor={selectedColor}
								handleColorChange={handleColorChange}
							/>
						</div>
						<div className={style.description}>
							<p className={cn(style.subtitle, style.descriptionTitle)}>Описание</p>
							<p className={style.descriptionText}>{description}</p>
						</div>
						<div className={style.control}>
							<Count
								className={style.count}
								count={count}
								handleIncrement={handleIncrement}
								handleDecrement={handleDecrement}
							/>
							<button type="submit" className={style.addCart}>
								В корзину
							</button>
							<button type="button" className={style.favorite} aria-label="Добавить в избранное">
								<Favorite />
							</button>
						</div>
					</form>
				</Container>
			</section>
			<Goods title="Вам также может понравиться" />
		</>
	);
};
