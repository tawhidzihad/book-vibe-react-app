import { Link } from "react-router";

const ErrorPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-white text-white px-6">
			<div className="text-center max-w-lg">
				{/* Error Code */}
				<h1 className="text-8xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
					404
				</h1>

				{/* Title */}
				<h2 className="mt-4 text-2xl md:text-3xl font-semibold bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
					Oops! Page not found
				</h2>

				{/* Description */}
				<p className="mt-3 text-gray-400">
					The page you're looking for doesn't exist or has been moved.
					Don't worry, you can go back to the homepage.
				</p>

				{/* Button */}
				<Link to="/">
					<button className="mt-6 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
						Back to Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
