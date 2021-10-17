import React, { useReducer } from "react";

import CartContext from "./cartContext";

const cartDefaultState = {
	items: [],
	total: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const newCart = state.items.concat(action.item);
		const newTotal = state.total + action.item.price * action.item.amount;
		return {
			items: newCart,
			total: newTotal,
		};
	}
	if (action.type === "RMV") {
	}
	return cartDefaultState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, cartDefaultState);

	const addToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};

	const removeFromCartHandler = (id) => {
		dispatchCartAction({ type: "RMV", id: id });
	};

	const cartContext = {
		items: cartState.items,
		total: cartState.total,
		addItem: addToCartHandler,
		removeItem: removeFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;