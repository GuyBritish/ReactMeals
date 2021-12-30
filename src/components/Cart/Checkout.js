import classes from "./Checkout.module.css";

const Checkout = (props) => {
	const confirmHandler = (event) => {
		event.preventDefault();
	};
	return (
		<form onSubmit={confirmHandler}>
			<div className={classes.control}>
				<label for="name">Your Name</label>
				<input type="text" id="name" />
			</div>
			<div className={classes.control}>
				<label for="address">Street Address</label>
				<input type="text" id="address" />
			</div>
			<div className={classes.control}>
				<label for="city">City</label>
				<input type="text" id="city" />
			</div>
			<div className={classes.control}>
				<label for="postal">Postal Code</label>
				<input type="text" id="postal" />
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
