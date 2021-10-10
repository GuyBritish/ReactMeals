import React from "react";

import banner from "../../assets/meals.jpg";

const Header = (props) => {
	return (
		<React.Fragment>
			<header>
				<h1> ReactMeals </h1>
				<button> Cart </button>
			</header>

			<div>
				<img src={banner} alt="A banner of delicious food" />
			</div>
		</React.Fragment>
	);
};

export default Header;
