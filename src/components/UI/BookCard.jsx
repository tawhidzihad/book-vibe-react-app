import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const BookCard = ({ book }) => {
	const navigate = useNavigate();

	// const handelBookDetailsCard = () => {
	// 	navigate(`/book-details/${book.bookId}`)
	// };

	return (
		<div
			onClick={() => navigate(`/book-details/${book.bookId}`)}
			className="card bg-base-100 shadow-sm"
		>
			<figure className="p-8 bg-base-200 ">
				<img
					src={book.image}
					alt={book.bookName}
					className="rounded h-60"
				/>
			</figure>

			<div className="card-body">
				<div className="flex gap-2 items-center">
					{book.tags.map((tag, i) => (
						<div
							key={i}
							className="badge text-green-500 bg-green-50 "
						>
							{tag}
						</div>
					))}
				</div>

				<h2 className="card-title font-bold text-2xl">
					{book.bookName}
				</h2>

				<p className="font-semibold text-lg">By : {book.author}</p>

				<div className="card-actions text-lg justify-between border-t border-dashed pt-4 border-zinc-300">
					<div className="font-semibold">{book.category}</div>
					<div className="font-semibold flex items-center gap-2 justify-center">
						{book.rating} <FaRegStar></FaRegStar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
