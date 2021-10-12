import React from "react";

import classes from "./MealSummary.module.css";

const MealSummary = () => {
	return (
		<section className={classes.summary}>
			<h2> Delicious Food, Delivered To You </h2>
			<p>
				Choose your favorite meal from our broad selection of available dishes and enjoy a
				delicious, convienient lunch or dinner at home.
			</p>
			<p>
				All of our meals are prepared with high-quality ingredients, just-in-case and of
				course by experience chefs!
			</p>
		</section>
	);
};

export default MealSummary;
