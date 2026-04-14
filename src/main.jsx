import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import BookContextProvider from "./context/BookContextProvider";
import "./index.css";
import { router } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BookContextProvider>
			<RouterProvider router={router}></RouterProvider>
			<ToastContainer></ToastContainer>
		</BookContextProvider>
	</StrictMode>,
);
