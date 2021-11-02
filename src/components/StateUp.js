import React, { useState } from "react";
import CountriesList from "./CountriesList";
import Country from "./Country";

function StateUp() {
  const [countries, setCountries] = useState([
    {
      name: "СССР",
      description:
        "Союз нерушимый республик свободных \r\nСплотила навеки Великая Русь.\r\n Да здравствует созданный волей народов\r\n Единый, могучий Советский Союз!",
    },
    {
      name: "США",
      description:
        "О, скажи, видишь ты в первых солнца лучах,\r\nЧто средь битвы мы шли на вечерней зарнице?\r\n        В синем с россыпью звёзд полосатый наш флаг\r\n        Красно-белым огнём с баррикад вновь явится.\r\n        Ночью сполох ракет на него бросал свет —\r\n        Это подлым врагам был наш гордый ответ.\r\n        Неужели, скажи, он теперь навсегда\r\n        Где свободных оплот и где храбрых страна?",
    },
    {
      name: "Англия",
      description:
        "Боже, храни нашу великодушную Королеву,\r\n Да здравствует наша благородная Королева, \r\nБоже, храни Королеву. \r\nДай ей ратных побед,\r\n Счастья и славы,\r\n И долгого царствования над нами, \r\nБоже, храни Королеву.",
    },
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
    <>
      <h2>Выберите страну:</h2>
      <div className='App-content'>
        <Country
          countries={countries}
          onChangeCountry={handlerChangeCountry}
          currentIndex={currentIndex}
        />

        <CountriesList
          countries={countries}
          onSelectCountry={handlerSelectCountry}
        />
      </div>
    </>
  );
}

export default StateUp;
