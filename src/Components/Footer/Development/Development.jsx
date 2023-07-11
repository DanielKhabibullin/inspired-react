import style from './Development.module.scss';

export const Development = () => (
	<div className={style.development}>
		<ul className={style.developmentList}>
			<li className={style.developmentItem}>
				Designer:{' '}
				<a className={style.link} href="https://t.me/Mrshmallowww">
					Anastasia Ilina
				</a>
			</li>
			<li className={style.developmentItem}>
				Developer:{' '}
				<a className={style.link} href="https://t.me/Khabibullin_Daniel">
					Daniel Khabibullin
				</a>
			</li>
		</ul>
	</div>
);
