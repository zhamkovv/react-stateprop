import React from "react";

export default function Country(props) {
	const country = props.countries[props.currentIndex];

	return (
		<div>
			<h2>Гимн {country.name}</h2>
			<textarea  rows="5" cols="30"
				value={country.description}
				onChange={(e) => props.onChangeCountry(props.currentIndex, e.target.value)}
			/>
		</div>
	);
}