import { Outlet } from 'react-router';
import { Footer, NavbarComp } from '../components';

const Layout = () => {
	return (
		<>
			<NavbarComp />
			<Outlet />
			<div className='bg-base-200'>
				<Footer />
			</div>
		</>
	);
};
export default Layout;
