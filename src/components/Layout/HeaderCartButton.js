import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cartContext";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
	const [btnActivated, setBtnActivated] = useState(false);

	const cartCtx = useContext(CartContext);
	const { items: itemList } = cartCtx;

	const numItems = itemList.reduce((cnt, item) => {
		return cnt + item.amount;
	}, 0);

	const btnClass = `${classes.button} ${btnActivated ? classes.bump : ""}`;

	useEffect(() => {
		if (itemList.length === 0) {
			return;
		}
		setBtnActivated(true);
		const timer = setTimeout(() => {
			setBtnActivated(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [itemList]);

	return (
		<button className={btnClass} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span> Your Cart </span>
			<span className={classes.badge}> {numItems} </span>
		</button>
	);
};

export default HeaderCartButton;
