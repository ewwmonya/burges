import { useEffect, useState } from 'react';
import { Hero, MenuContent } from '../components';
import MenuItem from '../components/menuItems/MenuItem';
import About from '../components/About';

const Homepage = () => {
	const [menu, setMenu] = useState([]);
	const main = menu.filter(
		(item) => item.category === 'burger' || item.category === 'hotdog'
	);
	const breakfast = menu.filter((item) => item.category === 'breakfast');
	const fries = menu.filter((item) => item.category === 'fries');

	useEffect(() => {
		const fetchMenu = async () => {
			const resp = await fetch('/data/menu.json');
			const data = await resp.json();
			setMenu(data);
		};
		fetchMenu();
	}, []);

	return (
		<main className='scroll-smooth'>
			<Hero text={`Burgers In The Hood`} />
			<section className='max-w-[960px] mx-auto  '>
				<h2 className='text-2xl my-4 px-4'>Town Favorites</h2>
				<ul className='menu menu-horizontal w-full grid lg:flex grid-cols-2 flex-nowrap justify-center'>
					{main.map((item) => {
						return (
							<li key={item.id} className=' menu menu-horizontal'>
								<MenuItem item={item} />
							</li>
						);
					})}
				</ul>
				<section className='max-w-[960px] mx-auto px-4'>
					<h3 className='text-2xl my-4' id='lunch'>
						Main Menu
					</h3>
					<div className=' flex flex-col gap-y-4'>
						<ul className='list grid lg:grid-cols-2 gap-4 rounded-box shadow-md '>
							{main.map((item) => (
								<MenuContent key={item.name} menu={item} />
							))}
						</ul>
						<h3 className='text-2xl my-4 capitalize' id='fries'>
							Fries
						</h3>
						<ul className='list grid lg:grid-cols-2 gap-4 rounded-box shadow-md '>
							{fries.map((item) => (
								<MenuContent key={item.name} menu={item} />
							))}
						</ul>
						<h3 className='text-2xl my-4 capitalize' id='breakfast'>
							breakfast
						</h3>

						<ul className='list grid lg:grid-cols-2 gap-4 rounded-box shadow-md '>
							{breakfast.map((item) => (
								<MenuContent key={item.name} menu={item} />
							))}
						</ul>
					</div>
				</section>
				<div
					className='mx-auto my-40 flex flex-col items-center text-center px-10'
					id='about'
				>
					<About />
				</div>
				<div className=''></div>
			</section>
		</main>
	);
};
export default Homepage;
