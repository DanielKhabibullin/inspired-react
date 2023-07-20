import style from './Pagination.module.scss';
import cn from 'classnames';
import {ReactComponent as PrevSvg} from '../../assets/prev.svg';
import {ReactComponent as NextSvg} from '../../assets/next.svg';
import {useSelector} from 'react-redux';
import {NavLink, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';

export const Pagination = () => {
	const [pagePagination, setPagePagination] = useState('');
	const pathname = useLocation().pathname;
	const { page, pages } = useSelector(state => state.goods);

	useEffect(() => {
		setPagePagination(page);
	}, [page]);

	const handlePageChange = newPage => {
		setPagePagination(newPage);
	};

	const handlePrevPage = () => {
		if (page > 1) {
			handlePageChange(pagePagination - 1);
		}
	};

	const handleNextPage = () => {
		if (pagePagination < pages) {
			handlePageChange(pagePagination + 1);
		}
	};

	const renderPaginationItems = () => {
		const paginationItems = [];
		let startPage = pagePagination === pages && pages >= 3 ? pagePagination - 2 : Math.max(1, pagePagination - 1);
		let endPage = Math.min(startPage + 2, pages);

		for (let i = startPage; i <= endPage; i++) {
			paginationItems.push(
				<li key={i} className={style.item}>
					<NavLink
						to={`${pathname}?page=${i}`}
						className={cn(style.link, i === page && style.linkActive)}
						onClick={() => handlePageChange(i)}>
						{i}
					</NavLink>
				</li>,
			);
		}

		return paginationItems;
	};

	return (
		pages > 1 && (
			<div className={style.pagination}>
				<button type="button" className={style.arrow} onClick={handlePrevPage} disabled={pagePagination <= 2}>
					<PrevSvg />
				</button>
				<ul className={style.list}>{renderPaginationItems()}</ul>
				<button
					type="button"
					className={style.arrow}
					onClick={handleNextPage}
					disabled={pagePagination >= pages - 1 || pages <= 3}>
					<NextSvg />
				</button>
			</div>
		)
	);
};