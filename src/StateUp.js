import React, { useState } from "react";

import CountriesList from "./CountriesList";
import Country from "./Country";

function StateUp() {
	const [countries, setCountries] = useState([
		{ name: "СССР", description: "Союз нерушимый республик свободных <br/>Сплотила навеки Великая Русь.<br/> Да здравствует созданный волей народов<br/> Единый, могучий Советский Союз!" },
		{ name: "Россия", description: "Россия — священная наша держава,<br/>Россия — любимая наша страна.<br/>Могучая воля, великая слава — <br/>Твоё достоянье на все времена!" },
        { name: "США", description: "О, скажи, видишь ты в первых солнца лучах,<br/>Что средь битвы мы шли на вечерней зарнице?<br/>        В синем с россыпью звёзд полосатый наш флаг<br/>        Красно-белым огнём с баррикад вновь явится.<br/>        Ночью сполох ракет на него бросал свет —<br/>        Это подлым врагам был наш гордый ответ.<br/>        Неужели, скажи, он теперь навсегда<br/>        Где свободных оплот и где храбрых страна?" },
		{ name: "Англия", description: "Боже, храни нашу великодушную Королеву,<br/> Да здравствует наша благородная Королева, <br/>Боже, храни Королеву. <br/>Дай ей ратных побед,<br/> Счастья и славы,<br/> И долгого царствования над нами, <br/>Боже, храни Королеву." },
	]);

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlerChangeCountry = (n, description) => {
		setCountries(
			countries.map((country, index) => {
				if (index === n) {
					return {
						...country,
						description,
					};
				}

				return country;
			})
		);
	};

	const handlerSelectCountry = (n) => setCurrentIndex(n);

	return (
		<div>
			<Country
				countries={countries}
				onChangeCountry={handlerChangeCountry}
				currentIndex={currentIndex}
			/>
                        <h2>Выберите страну:</h2>

			<CountriesList countries={countries} onSelectCountry={handlerSelectCountry} />
		</div>
	);
}

export default StateUp;