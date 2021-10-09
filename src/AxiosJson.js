import React, { Fragment, useState } from "react";
import "./App.css";
import axios from "axios";

function AxiosJson() {
  let [data, setData] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setData(response.data));
  return (
    <>
      <div className='App'>
        <span></span>
        <h5>
          {data.map((i,index) => (
            <span key={index}>{i.body}</span>
          ))}
        </h5>
      </div>
    </>
  );
}

export default AxiosJson;