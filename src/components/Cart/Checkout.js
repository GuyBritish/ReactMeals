import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (str) => {
	return str.trim() === "";
};
const isFiveChars = (str) => {
	return str.trim().length === 5;
};

const Checkout = (props) => {
	const [formInputValidity, setFormInputValidity] = useState({
		name: true,
		address: true,
		city: true,
		postal: true,
	});

	const nameInputRef = useRef();
	const addressInputRef = useRef();
	const cityInputRef = useRef();
	const postalInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const name = nameInputRef.current.value;
		const address = addressInputRef.current.value;
		const city = cityInputRef.current.value;
		const postal = postalInputRef.current.value;

		const nameIsValid = !isEmpty(name);
		const addressIsValid = !isEmpty(address);
		const cityIsValid = !isEmpty(city);
		const postalIsValid = isFiveChars(postal);

		setFormInputValidity({
			name: nameIsValid,
			address: addressIsValid,
			city: cityIsValid,
			postal: postalIsValid,
		});

		const formIsValid = nameIsValid && addressIsValid && cityIsValid && postalIsValid;
	};

	const nameControlClasses = `${classes.control} ${
		formInputValidity.name ? "" : classes.invalid
	}`;
	const addressControlClasses = `${classes.control} ${
		formInputValidity.address ? "" : classes.invalid
	}`;
	const cityControlClasses = `${classes.control} ${
		formInputValidity.city ? "" : classes.invalid
	}`;
	const postalControlClasses = `${classes.control} ${
		formInputValidity.postal ? "" : classes.invalid
	}`;

	return (
		<form onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label for="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div className={addressControlClasses}>
				<label for="address">Street Address</label>
				<input type="text" id="address" ref={addressInputRef} />
				{!formInputValidity.address && <p>Please enter a valid address!</p>}
			</div>
			<div className={cityControlClasses}>
				<label for="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputValidity.city && <p>Please enter a valid city!</p>}
			</div>
			<div className={postalControlClasses}>
				<label for="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInputRef} />
				{!formInputValidity.postal && <p>Please enter a valid postal code (5 digits)!</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
