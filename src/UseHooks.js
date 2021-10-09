import React, { useState, useEffect } from "react";

function UseHooks(props) {
  console.log("useState(props.arg)");
  const [count, setCount] = useState(props.arg);

  const buttonHandler = () => {
    console.log("handler");
    let val = count;
    val++;
    setCount(val);
  };
  useEffect(() => console.log("effect"));

  console.log("render before return");
  return (
    <>
      {console.log("render in return")}
      <h2>Кол-во: {count}</h2>
      <button onClick={buttonHandler}>Добавить кол-во</button>
    </>
  );
}

export default UseHooks;
