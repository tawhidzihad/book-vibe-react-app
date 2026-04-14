import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContextProvider";
import SelectedBooksCard from "../UI/SelectedBooksCard";

const ReadListBooks = ({ sortingType }) => {
	const { readListBooks } = useContext(BookContext);

	const [filteredReadList, setFilteredReadList] = useState(readListBooks);

	useEffect(() => {
		if (sortingType) {
			if (sortingType === "Pages") {
				const sortedData = [...readListBooks].sort(
					(a, b) => a.totalPages - b.totalPages,
				);
				setFilteredReadList(sortedData);
			} else if (sortingType === "Rating") {
				const sortedData = [...readListBooks].sort(
					(a, b) => a.rating - b.rating,
				);
				setFilteredReadList(sortedData);
			}
		}
	}, [sortingType, readListBooks]);

	if (filteredReadList.length === 0) {
		return (
			<div className="min-h-[40vh] flex justify-center items-center bg-zinc-200 mt-6 rounded-2xl">
				<h1 className="text-2xl font-bold text-zinc-400">
					No Read List Added Yet!
				</h1>
			</div>
		);
	}

	return (
		<div className="space-y-8 pt-6">
			{filteredReadList.map((book, ind) => (
				<SelectedBooksCard key={ind} book={book}></SelectedBooksCard>
			))}
		</div>
	);
};

export default ReadListBooks;
