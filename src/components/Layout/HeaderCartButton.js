import React, { useContext } from "react";

import CartContext from "../../store/cartContext";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	const numItems = cartCtx.items.reduce((cnt, item) => {
		return cnt + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span> Your Cart </span>
			<span className={classes.badge}> {numItems} </span>
		</button>
	);
};

export default HeaderCartButton;
