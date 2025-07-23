const MenuContent = ({ menu }) => {
	return (
		<>
			<li
				key={menu.id}
				className='bg-amber-500 list-row  lg:flex justify-center gap-x-8'
			>
				<div>
					<img className='size-40 rounded-box' src={menu.image} />
				</div>
				<div className='flex flex-col'>
					<p className='text-lg'>{menu.name}</p>
					<p className='text-lg lg:text-xs uppercase font-semibold opacity-60'>
						{menu.category}
					</p>

					<button className='place-self-end-safe rounded-full bg-gray-800 w-20 h-20 text-2xl cursor-default text-[#FFF248] shadow-sm shadow-black'>
						${menu.price}
					</button>
				</div>
			</li>
		</>
	);
};
export default MenuContent;
