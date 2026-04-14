const getAllReadListFromLocalDB = () => {
	const allReadList = localStorage.getItem("readList");
	if (allReadList) return JSON.parse(allReadList);
	return [];
};

const addReadListToLocalDB = (book) => {
	const allBooks = getAllReadListFromLocalDB();
	const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
	if (!isAlreadyExist) {
		allBooks.push(book);
		localStorage.setItem("readList", JSON.stringify(allBooks));
	}
};

// ************************************************

const getWishListdata = () => {
	const allWishListData = localStorage.getItem("wishList");
	if (allWishListData) return JSON.parse(allWishListData);
	return [];
};

const setWishListData = (book) => {
	const wishListAllBooks = getWishListdata();
	const isAlreadyHave = wishListAllBooks.find(
		(bk) => bk.bookId === book.bookId,
	);
	if (!isAlreadyHave) {
		wishListAllBooks.push(book);
		localStorage.setItem("wishList", JSON.stringify(wishListAllBooks));
	}
};

export {
	addReadListToLocalDB,
	getAllReadListFromLocalDB,
	getWishListdata,
	setWishListData,
};
