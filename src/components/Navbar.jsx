import { NavLink } from 'react-router';
import { RiAlignJustify } from 'react-icons/ri';
import NavMenu from './NavMenu';
import Links from './Links';

const Navbar = () => {
	return (
		<nav className='bg-base-200'>
			<div className='flex navbar'>
				<div className='navbar-start'>
					<h1 className='font-black tracking-widest uppercase text-4xl'>
						Burgs
					</h1>
				</div>
				<div className='navbar-end hidden lg:flex'>
					<div className='lg:flex hidden justify-center  bg-base-200'>
						<NavMenu />
					</div>
				</div>
				<div className='navbar-end flex lg:hidden'>
					<div className='dropdown lg:hidden'>
						<button tabIndex={0} className='btn btn-link  hover:bg-none'>
							<RiAlignJustify className='w-12 h-12' />
						</button>
						<ul
							tabIndex={0}
							className='p-8 menu dropdown-content gap-y-4 bg-base-200 z-[1] w-[40vw] min-h-[100vh] right-0'
						>
							<Links />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
