import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContextProvider";
import SelectedBooksCard from "../UI/SelectedBooksCard";

const WishListBooks = ({sortingType}) => {
	const { wishListBooks } = useContext(BookContext);

    const [filteredWishList, setFilteredWishList] = useState(wishListBooks);
    
        useEffect(() => {
            if (sortingType) {
                if (sortingType === "Pages") {
                    const sortedData = [...wishListBooks].sort(
                        (a, b) => a.totalPages - b.totalPages,
                    );
                    setFilteredWishList(sortedData);
                } else if (sortingType === "Rating") {
                    const sortedData = [...wishListBooks].sort(
                        (a, b) => a.rating - b.rating,
                    );
                    setFilteredWishList(sortedData);
                }
            }
        }, [sortingType, wishListBooks]);

    if(filteredWishList.length === 0 ){
        return (
            <div className="min-h-[40vh] flex justify-center items-center bg-zinc-200 mt-6 rounded-2xl">
                <h1 className="text-2xl font-bold text-zinc-400">No WishList Added Yet!</h1>
            </div>
        )
    }

	return (
		<div className="space-y-8 pt-6">
			{filteredWishList.map((book, ind) => (
				<SelectedBooksCard key={ind} book={book}></SelectedBooksCard>
			))}
		</div>
	);
};

export default WishListBooks;
