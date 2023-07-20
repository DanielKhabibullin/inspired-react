import cn from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {ReactComponent as Favorite} from '../../assets/favorites.svg';
import style from './BtnFavorite.module.scss';
import {addToFavorite, removeFromFavorite} from '../../features/favoritesSlice';


export const BtnFavorite = ({id}) => {
	const dispatch = useDispatch();
	const isFavorite = useSelector(state => state.favorites.includes(id));

	const handleToggleFavorites = () => {
		if (isFavorite) {
			dispatch(removeFromFavorite({id}));
		} else {
			dispatch(addToFavorite({id}));
		}
	};

	return (
		<button
			type="button"
			className={cn(style.favorite, isFavorite && style.active)}
			aria-label="Добавить в избранное"
			onClick={handleToggleFavorites}>
			<Favorite />
		</button>
	);
};

BtnFavorite.propTypes = {
	id: PropTypes.string.isRequired,
};
