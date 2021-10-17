import React, { useReducer } from "react";

import CartContext from "./cartContext";

const cartDefaultState = {
	items: [],
	total: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const newTotal = state.total + action.item.price * action.item.amount;

		const cartItemIndex = state.items.findIndex((item) => {
			return item.id === action.item.id;
		});

		const cartItem = state.items[cartItemIndex];
		let newCart;

		if (cartItem) {
			const newCartItem = {
				...cartItem,
				amount: cartItem.amount + action.item.amount,
			};
			newCart = [...state.items];
			newCart[cartItemIndex] = newCartItem;
		} else {
			newCart = state.items.concat(action.item);
		}

		return {
			items: newCart,
			total: newTotal,
		};
	}

	if (action.type === "RMV") {
		const cartItemIndex = state.items.findIndex((item) => {
			return item.id === action.item.id;
		});
		const cartItem = state.items[cartItemIndex];
		const newTotal = state.amount - cartItem.price;
		let newCart;
		if (cartItem.amount === 1) {
			newCart = state.items.filter((item) => {
				return action.id !== item.id;
			});
		} else {
			const newCartItem = {
				...cartItem,
				amount: cartItem.amount - 1,
			};
			newCart = [...state.items];
			newCart[cartItemIndex] = newCartItem;
		}
		return {
			items: newCart,
			total: newTotal,
		};
	}
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
