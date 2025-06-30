const Hero = ({ text, paragraph, btnText }) => {
	return (
		<div className='hero bg-base-200 min-h-screen'>
			<div
				className='hero hero-overlay bg-transparent lg:hidden'
				style={{ backgroundImage: 'url(/burges-hero.png)' }}
			></div>
			<div
				className='hero hidden hero-overlay bg-transparent lg:block'
				style={{ backgroundImage: 'url(/landscape-hero-burges.png)' }}
			></div>
			<div className='hero-overlay bg-base-200 opacity-30'></div>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-5xl font-bold text-neutral-100'>{text}</h1>
					<p className='py-6 text-white font-black tracking-wide overlay'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Hero;
