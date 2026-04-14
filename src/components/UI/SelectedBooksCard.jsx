import { HiUsers } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuFileChartColumnIncreasing } from "react-icons/lu";

const SelectedBooksCard = ({ book }) => {
	return (
		<div className="border p-5 border-zinc-300 rounded-2xl">
			<div className="flex flex-col lg:flex-row gap-5">
				<div className="flex-1 flex justify-center items-center p-5 bg-zinc-300 rounded-2xl">
					<img
						src={book.image}
						alt={book.bookName}
						className="h-50"
					/>
				</div>

				<div className="flex-3 space-y-3">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold">{book.bookName}</h2>
						<p className="font-medium">By : {book.author}</p>
					</div>

					<div className="border-b border-zinc-300 pb-5 space-y-4">
						<div className="flex flex-col lg:flex-row gap-5">
							<div className="flex items-center gap-1">
								<span className="font-bold mr-3">Tag</span>
								{book.tags.map((tag, i) => (
									<div
										key={i}
										className="badge text-green-500 bg-green-50 font-bold"
									>
										#{tag}
									</div>
								))}
							</div>

							<div>
								<p className="flex gap-2 items-center text-xl font-medium">
									<IoLocationOutline></IoLocationOutline> Year
									of Publishing: {book.yearOfPublishing}
								</p>
							</div>
						</div>

						<div>
							<p className="flex items-center gap-3 font-medium">
								<HiUsers></HiUsers>
								<span>Publisher: {book.publisher}</span>

								<LuFileChartColumnIncreasing></LuFileChartColumnIncreasing>
								<span>Page {book.totalPages}</span>
							</p>
						</div>
					</div>

					<div className="flex items-center pt-2 gap-3">
						<span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full font-medium">
							Category: {book.category}
						</span>
						<span className="bg-yellow-100 text-yellow-500 px-4 py-2 rounded-full font-medium">
							Category: {book.rating}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectedBooksCard;
