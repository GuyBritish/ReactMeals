import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import banner from "../../assets/meals.jpg";

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1> ReactMeals </h1>
				<HeaderCartButton onClick={props.onShow} />
			</header>

			<div className={classes["main-image"]}>
				<img src={banner} alt="A banner of delicious food" />
			</div>
		</React.Fragment>
	);
};

export default Header;
