const MenuContent = ({ menu }) => {
	return (
		<>
			<li
				key={menu.id}
				className='list-row bg-base-200 lg:flex justify-center gap-x-8'
			>
				<div>
					<img className='size-40 rounded-box' src={menu.image} />
				</div>
				<div>
					<div>{menu.name}</div>
					<div className='text-xs uppercase font-semibold opacity-60'>
						{menu.category}
					</div>
				</div>
				<button className='rounded-full bg-gray-800 w-20 h-20 text-2xl cursor-default text-[#FFF248] shadow-sm shadow-black'>
					${menu.price}
				</button>
			</li>
		</>
	);
};
export default MenuContent;
