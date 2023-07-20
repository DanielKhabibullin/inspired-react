import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import {CartPage} from './Components/CartPage/CartPage';
import {ErrorPage} from './Components/ErrorPage/ErrorPage';
import {FavoritePage} from './Components/FavoritePage/FavoritePage';
import {MainPage} from './Components/MainPage/MainPage';
import {ProductPage} from './Components/ProductPage/ProductPage';
import {fetchColors} from './features/colorSlice';
import {fetchNavigation} from './features/navigationSlice';
import {Root} from './routes/Root';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />}>
			<Route index element={<MainPage />} />
			<Route path='catalog/:gender/:category?' element={<MainPage/>} />
			<Route path="product/:id" element={<ProductPage />} />
			<Route path="favorite" element={<FavoritePage />} />
			<Route path="cart" element={<CartPage />} />
			<Route path='*' element={<ErrorPage />} />
		</Route>,
	),
);

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNavigation());
		dispatch(fetchColors());
	}, [dispatch])
	
	return <RouterProvider router={router} />
};
