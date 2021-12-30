import classes from "./Checkout.module.css";

const Checkout = (props) => {
	return (
		<form>
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
			<button type="button" onClick={props.onCancel}>
				Cancel
			</button>
			<button>Confirm</button>
		</form>
	);
};

export default Checkout;
