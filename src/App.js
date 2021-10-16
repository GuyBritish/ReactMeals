import React, { useState } from "react";

import CartProvider from "./store/cartPorvider,";

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
		<CartProvider>
			{cartIsShown && <Cart onClose={closeHandler} />}
			<Header onShow={showHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
