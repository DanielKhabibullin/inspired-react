import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div>
			<h2>Error 404</h2>
			<p>{error?.message || 'Something went wrong'}</p>
		</div>
	);
};