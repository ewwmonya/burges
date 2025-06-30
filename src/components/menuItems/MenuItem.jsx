function MenuItem({ item }) {
	const { category, name, price, description, image } = item;
	return (
		<>
			<div className='card bg-base-200 lg:w-60 w-55 shadow-md'>
				<figure className='overflow-hidden aspect-square max-h-[200px]'>
					<img src={image} alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
		</>
	);
}
export default MenuItem;
