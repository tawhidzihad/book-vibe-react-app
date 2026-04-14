import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContextProvider";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
	// const books = use(booksPromise);
	// console.log("Books From Books Promise", books);

	const { id } = useParams();
	const booksFromLoader = useLoaderData();
	const expectedBook = booksFromLoader.find(
		(book) => book.bookId === Number(id),
	);

	const { handleMarkAsRead, handleWishlistBooks } = useContext(BookContext);

	return (
		<div className="flex flex-col lg:flex-row gap-10 pt-10">
			<figure className="flex-1 flex justify-center items-center bg-zinc-200 rounded-2xl">
				<img
					src={expectedBook.image}
					alt={expectedBook.bookName}
					className="lg:h-140 rounded-2xl"
				/>
			</figure>

			<div className="flex-1 flex flex-col ">
				<div className="border-b border-gray-400 pb-5 space-y-5">
					<h2 className="text-4xl font-bold">
						{expectedBook.bookName}
					</h2>
					<p className="text-xl font-medium">
						By : {expectedBook.author}
					</p>
				</div>

				<p className="text-xl font-medium py-3">
					{expectedBook.category}
				</p>

				<div className="border-b border-gray-400 border-t py-5 space-y-5">
					<p>
						<span className="font-bold">Review : </span>
						{expectedBook.review}
					</p>

					<div className="flex gap-15 items-center">
						<span className="font-bold">Tag</span>
						<div className="flex gap-1">
							{expectedBook.tags.map((tag, i) => (
								<div
									key={i}
									className="badge text-green-500 bg-green-50 font-medium"
								>
									{tag}
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="pt-6 space-y-6">
					<div className="space-y-3">
						<div className="flex gap-5">
							<span className="flex-1">Number of Pages:</span>
							<span className="flex-1 md:flex-2 font-semibold">
								{expectedBook.totalPages}
							</span>
						</div>

						<div className="flex gap-5">
							<span className="flex-1">Publisher:</span>
							<span className="flex-1 md:flex-2 font-semibold">
								{expectedBook.publisher}
							</span>
						</div>

						<div className="flex gap-5">
							<span className="flex-1">Year of Publishing:</span>
							<span className="flex-1 md:flex-2 font-semibold">
								{expectedBook.yearOfPublishing}
							</span>
						</div>

						<div className="flex gap-5">
							<span className="flex-1">Rating:</span>
							<span className="flex-1 md:flex-2 font-semibold">
								{expectedBook.rating}
							</span>
						</div>
					</div>

					<div className="flex gap-3">
						<button
							onClick={() => handleMarkAsRead(expectedBook)}
							className="btn btn-outline"
						>
							Mark as Read
						</button>
						<button
							className="btn btn-primary"
							onClick={() => handleWishlistBooks(expectedBook)}
						>
							Add to Wishlist
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
