import React, { Fragment } from "react";
import axios from "axios";

function AxiosJson() {
  const data = [];
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    data = response.data;
  });
  return (
    <>
      <div className='App'>
        <header>
          <h1>It's your sheeeeet!</h1>
        </header>
        <ul>
          {data.map((i, index) => (
            <li key={index}>{i.title}{i.body} {console.log(i.title)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AxiosJson;
