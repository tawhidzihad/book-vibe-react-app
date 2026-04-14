import BookImage from '../../assets/pngwing1.png'

const Banner = () => {
	return (
		<div className="hero bg-base-200 rounded-2xl my-8">
			<div className="hero-content flex-col lg:flex-row-reverse w-full justify-between lg:px-30 lg:py-10">
				<img
					src={BookImage}
					
				/>
				<div className='text-center lg:text-left'>
					<h1 className="text-5xl font-bold capitalize">Books to freshen up your bookshelf ❤️</h1>
					<button className="btn btn-success mt-5 text-white">View The List</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
