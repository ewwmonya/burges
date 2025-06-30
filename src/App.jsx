import { createBrowserRouter, RouterProvider } from 'react-router';
import { Error, Layout, Homepage } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
		],
	},
]);
const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};
export default App;
