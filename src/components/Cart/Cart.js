import React, { useContext } from "react";

import CartContext from "../../store/cartContext";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const cartItems = cartCtx.items.map((item) => <li>{item.name}</li>);

	const total = `$${cartCtx.total.toFixed(2)}`;

	return (
		<Modal onClose={props.onClose}>
			<ul className={classes["cart-items"]}> {cartItems} </ul>
			<div className={classes.total}>
				<span> Total Amount </span>
				<span> {total} </span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button-alt"]} onClick={props.onClose}>
					Close
				</button>
				{cartCtx.items.length > 0 && <button className={classes.button}> Order </button>}
			</div>
		</Modal>
	);
};

export default Cart;
