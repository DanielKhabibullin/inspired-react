import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {setPage} from '../features/goodsSlice';

export const usePageFromSearchParam = (dispatch) => {
	const location = useLocation();
	const searchPrams = new URLSearchParams(location.search);
	const pageURL = +searchPrams.get('page');

	useEffect(() => {
		dispatch(setPage(pageURL));
	}, [pageURL, dispatch]);

	return pageURL;
};