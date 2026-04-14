import { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
	addReadListToLocalDB,
	getAllReadListFromLocalDB,
	getWishListdata,
    setWishListData,
} from "../utils/localDB";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
	const [readListBooks, setReadListBooks] = useState(() =>
		getAllReadListFromLocalDB(),
	);

	const [wishListBooks, setWishListBooks] = useState(() => getWishListdata());

	const handleWishlistBooks = (currentBook) => {

        setWishListData(currentBook)

		const isExistInReadList = readListBooks.find(
			(book) => book.bookId === currentBook.bookId,
		);
		if (isExistInReadList) {
			toast.error("This book already in Read List");
			return;
		}

		const isExist = wishListBooks.find(
			(book) => book.bookId === currentBook.bookId,
		);
		if (isExist) {
			toast.error("The book is already exist in Wishlist");
		} else {
			setWishListBooks([...wishListBooks, currentBook]);
			toast.success(`${currentBook.bookName} is added to Wishlist`);
		}
	};

	const handleMarkAsRead = (currentBook) => {
		addReadListToLocalDB(currentBook);

		const isExistBook = readListBooks.find(
			(book) => book.bookId === currentBook.bookId,
		);
		if (isExistBook) {
			toast.error("The book is already exist in Read List");
			return;
		} else {
			setReadListBooks([...readListBooks, currentBook]);
			toast.success(`${currentBook.bookName} is added to Read List`);
		}
	};

	const data = {
		readListBooks,
		setReadListBooks,
		handleMarkAsRead,

		wishListBooks,
		setWishListBooks,
		handleWishlistBooks,
	};

	return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
