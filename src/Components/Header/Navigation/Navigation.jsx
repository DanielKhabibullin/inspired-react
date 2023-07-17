import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {setActiveGender} from '../../../features/navigationSlice';
import {Container} from '../../Layout/Container/Container';
import {Category} from './Category/Category';
import {Gender} from './Gender/Gender';

export const Navigation = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const gender = location.pathname.split('/')[1] || 'women';

	useEffect(() => {
		dispatch(setActiveGender(gender));
	}, [gender, dispatch])
	
	return (
		<nav>
			<Container>
				<Gender />
				<Category />
			</Container>
		</nav>
	);
}