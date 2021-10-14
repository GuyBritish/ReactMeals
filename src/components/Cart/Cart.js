import React from "react";

import classes from "./Cart.module.css";

const Cart = (props) => {
	const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
		<li>{item.name}</li>
	));
	return (
		<div>
			<ul className={classes["cart-items"]}> {cartItems} </ul>
			<div></div>
			<div></div>
		</div>
	);
};

export default Cart;
