import React, { useState, useContext } from "react";

import CartContext from "../../store/cartContext";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";

const axios = require("axios");

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			name={item.name}
			amount={item.amount}
			price={item.price}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
			onAdd={cartItemAddHandler.bind(null, item)}
		/>
	));

	const total = `$${cartCtx.total.toFixed(2)}`;

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		const options = {
			url: "https://reactmeals-5109b-default-rtdb.firebaseio.com/orders.json",
			method: "POST",
			data: JSON.stringify({
				user: userData,
				order: cartCtx.items,
			}),
		};
		try {
			const resp = await axios(options);
			console.log(resp);
		} catch (err) {
			console.log(err);
		}
		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
	};

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes["button-alt"]} onClick={props.onClose}>
				Close
			</button>
			{cartCtx.items.length > 0 && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<React.Fragment>
			<ul className={classes["cart-items"]}> {cartItems} </ul>
			<div className={classes.total}>
				<span> Total Amount </span>
				<span> {total} </span>
			</div>
			{isCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />}
			{!isCheckout && modalActions}
		</React.Fragment>
	);

	const submittingModalContent = <p>Sending order data...</p>;

	const didSubmitModalContent = (
		<React.Fragment>
			<p> Order successfully sent! </p>
			<div className={classes.actions}>
				<button className={classes["button-alt"]} onClick={props.onClose}>
					Close
				</button>
			</div>
		</React.Fragment>
	);

	return (
		<Modal onClose={props.onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && submittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
