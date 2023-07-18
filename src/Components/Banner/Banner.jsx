import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useMedia} from 'react-use';
import {API_URL} from '../../const';
import {Container} from '../Layout/Container/Container';
import style from './Banner.module.scss';
import PropTypes from 'prop-types';

export const Banner = ({data}) => {
	const [image, setImage] = useState('');
	const isMobile = useMedia('(max-width: 540px)');
	const isTablet = useMedia('(max-width: 768px)');
	const isLaptop = useMedia('(max-width: 1024px)');

	const backgroundImage = image ? `url(${API_URL}/${image})` : '';

	useEffect(() => {
		if (isMobile) {
			setImage(data?.bg.mobile);
		} else if (isTablet) {
			setImage(data?.bg.tablet);
		} else if (isLaptop) {
			setImage(data?.bg.laptop);
		} else {
			setImage(data?.bg.desktop);
		}
	}, [isMobile, isTablet, isLaptop, data?.bg]);

	return (
		data && (
			<section className={style.banner} style={{backgroundImage}}>
				<Container>
					<div className={style.content}>
						<h2 className={style.title}>{data.description}</h2>
						<NavLink className={style.link} to={`/product/${data.id}`}>
							Перейти
						</NavLink>
					</div>
				</Container>
			</section>
		)
	);
};

Banner.propTypes = {
	data: PropTypes.shape({
		bg: PropTypes.shape({
			mobile: PropTypes.string,
			tablet: PropTypes.string,
			laptop: PropTypes.string,
			desktop: PropTypes.string,
		}),
		description: PropTypes.string,
		id: PropTypes.string,
	}),
};
