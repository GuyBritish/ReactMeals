import React from "react";

const Cart = (props) => {
	const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
		<li>{item.name}</li>
	));
	return (
		<div>
			<ul> {cartItems} </ul>
			<div></div>
			<div></div>
		</div>
	);
};

export default Cart;
