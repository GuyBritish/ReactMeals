import React from "react";

import CartContext from "./cartContext";

const CartProvider = (props) => {
	const addToCartHandler = (item) => {};

	const removeFromCartHandler = (id) => {};

	const cartContext = {
		items: [],
		total: 0,
		addItem: addToCartHandler,
		removeItem: removeFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
