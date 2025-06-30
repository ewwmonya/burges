function MenuItem({ item }) {
	const { category, name, price, description, image } = item;
	return (
		<>
			<div className='card bg-base-200 w-60 shadow-md'>
				<figure className='overflow-hidden aspect-square max-h-[200px]'>
					<img src={image} alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p>{description}</p>
					<div className='card-actions flex justify-end'>
						<button className='btn btn-neutral'>Buy Now</button>
					</div>
				</div>
			</div>
		</>
	);
}
export default MenuItem;
