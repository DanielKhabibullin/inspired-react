import style from './ProductSize.module.scss';
import PropTypes from 'prop-types';

export const ProductSize = ({size, selectedSize, handleSizeChange}) => (
	<div className={style.size}>
		<p className={style.title}>Размер</p>
		<div className={style.list}>
			{size?.map(item => (
				<label key={item} className={style.item}>
					<input
						type="radio"
						name="size"
						value={item}
						className={style.input}
						checked={selectedSize === item}
						onChange={handleSizeChange}
					/>
					<span className={style.check}>{item}</span>
				</label>
			))}
		</div>
	</div>
);

ProductSize.propTypes = {
	size: PropTypes.array,
	selectedSize: PropTypes.string,
	handleSizeChange: PropTypes.func,
};
