import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<footer className='footer footer-vertical max-w-[960px] mx-auto mt-8 text-neutral-content p-10'>
				<aside>
					<h1 className='font-black tracking-widest uppercase text-4xl'>
						Burgs
					</h1>
					<p>Providing reliable eats since 2009</p>
					<ul className='menu bg-base-200 rounded-box w-56'>
						<li>
							<a>BreakFast</a>
						</li>
						<li>
							<a>Lucnh</a>
						</li>
						<li>
							<p className=' font-bold tracking-wide'>
								Late Night Coming Soon!
							</p>
						</li>
					</ul>
				</aside>

				<nav>
					<h6 className='footer-title'>Social</h6>

					<div className='grid grid-flow-col gap-4'>
						<a className='btn btn-ghost btn-square'>
							<FaTwitterSquare className='h-6 w-6' />
						</a>
						<a className='btn btn-ghost btn-square'>
							<FaInstagramSquare className='h-6 w-6' />
						</a>
						<a className='btn btn-ghost btn-square'>
							<FaFacebookSquare className='h-6 w-6' />
						</a>
					</div>
				</nav>
			</footer>
		</>
	);
};
export default Footer;
