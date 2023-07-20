import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategory} from '../../features/goodsSlice';
import {setActiveGender} from '../../features/navigationSlice';
import {usePageFromSearchParam} from '../../hooks/usePageFromSearchParam';
import {Goods} from '../Goods/Goods';

export const FavoritePage = () => {
	const dispatch = useDispatch();
	const favorites = useSelector(state => state.favorites);

	const page = usePageFromSearchParam(dispatch);

	useEffect(() => {
			const param = {list: favorites};
			if (page) {
				param.page = page;
			}
			dispatch(fetchCategory(param));
			dispatch(setActiveGender(''));
	}, [favorites, page, dispatch]);

	return <Goods title="Избранное" />;
};
