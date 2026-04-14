import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/Error/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				element: <Homepage></Homepage>
			},
			{
				path: "/books",
				element: <Books></Books>
			},
			{
				path: "/book-details/:id",
				Component: BookDetails,
				loader: () => fetch("/booksData.json"),
				hydrateFallbackElement: <h1>Loading...</h1>
			}
		],
        errorElement: <ErrorPage></ErrorPage>
	},
]);