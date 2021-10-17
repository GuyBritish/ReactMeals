import React, { useRef, useState } from "react";

import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmount_Num = +enteredAmount;

		if (enteredAmount.trim().length === 0 || enteredAmount_Num < 1 || enteredAmount_Num > 5) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmount_Num);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				label="Amount"
				input={{
					ref: { amountInputRef },
					id: "amount" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button> Add </button>
			{!amountIsValid && <p> Please enter a vaiid amount (1-5) </p>}
		</form>
	);
};

export default MealItemForm;
