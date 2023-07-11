import style from './Main.module.scss';

// eslint-disable-next-line react/prop-types
export const Main = ({children}) => <div className={style.main}>{children}</div>;