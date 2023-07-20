import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategory} from '../../features/goodsSlice';
import {setActiveGender} from '../../features/navigationSlice';
import {Goods} from '../Goods/Goods';

export const FavoritePage = () => {
	const dispatch = useDispatch();
	const favorites = useSelector(state => state.favorites);


	useEffect(() => {
		if (favorites.length) {
			const param = { list: favorites };


			dispatch(fetchCategory(param));
			dispatch(setActiveGender(''));
		}
	}, [favorites, dispatch]);

	return <Goods title="Избранное" />;
};
