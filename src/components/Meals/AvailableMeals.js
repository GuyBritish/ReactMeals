import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem";

import classes from "./AvailableMeals.module.css";

const axios = require("axios");

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			setIsLoading(true);
			const options = {
				url: "https://reactmeals-5109b-default-rtdb.firebaseio.com/meals.json",
			};
			const resp = await axios(options);
			const loadedMeals = [];
			for (const key in resp.data) {
				loadedMeals.push({
					id: key,
					name: resp.data[key].name,
					description: resp.data[key].description,
					price: resp.data[key].price,
				});
			}
			setMeals(loadedMeals);
		};

		fetchMeals().catch((err) => {
			setHttpError(err.message);
		});
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		);
	}

	const mealList = meals.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul> {mealList} </ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
