import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBooks from "../../components/selectedBooks/ReadListBooks";
import WishListBooks from "../../components/selectedBooks/WishListBooks";

const Books = () => {
	const [sortingType, setSortingType] = useState("");

	return (
		<div>
			<div className="flex justify-center items-center">
				<button
					className="btn"
					popoverTarget="popover-1"
					style={
						{
							anchorName: "--anchor-1",
						} /* as React.CSSProperties */
					}
				>
					Sort By {sortingType}
				</button>

				<ul
					className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
					popover="auto"
					id="popover-1"
					style={
						{
							positionAnchor: "--anchor-1",
						} /* as React.CSSProperties */
					}
				>
					<li onClick={() => setSortingType("Pages")}>
						<a>Pages</a>
					</li>
					<li onClick={() => setSortingType("Rating")}>
						<a>Rating</a>
					</li>
				</ul>
			</div>

			<Tabs>
				<TabList>
					<Tab>Read Books</Tab>
					<Tab>Wishlist Books</Tab>
				</TabList>

				<TabPanel>
					<ReadListBooks sortingType={sortingType}></ReadListBooks>
				</TabPanel>

				<TabPanel>
					<WishListBooks sortingType={sortingType}></WishListBooks>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Books;
