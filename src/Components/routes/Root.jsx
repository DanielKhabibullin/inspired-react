
import {Outlet} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {Main} from '../Layout/Main/Main';

export const Root = () => (
	<>
		<Header />
		<Main>
			<Outlet />
		</Main>
		<Footer />
	</>
);