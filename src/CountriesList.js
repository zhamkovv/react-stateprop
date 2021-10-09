import React from "react";

export default function CountriesList(props) {

  return (
    <div className='App-content'>
      {props.countries.map((country, index) => (
        <div className='News'>
          <h2 key={country.name} onClick={() => props.onSelectCountry(index)}>
            {country.name}
          </h2>
          <p dangerouslySetInnerHTML={{__html: country.description}}></p>
        </div>
      ))}
    </div>
  );
}
