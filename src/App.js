import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const closeHandler = () => {
		setCartIsShown(false);
	};

	const showHandler = () => {
		setCartIsShown(true);
	};

	return (
		<React.Fragment>
			{cartIsShown && <Cart onClose={closeHandler} />}
			<Header onShow={showHandler} />
			<main>
				<Meals />
			</main>
		</React.Fragment>
	);
}

export default App;
