import React from "react";
import RefComp from "./RefComp";

export default function ForwardBut () {
  const ref = React.useRef(null); // {current: null}
  return (
    <>
      <RefComp ref={ref}>Ura! Ya ponyual!</RefComp>
      <button
        onClick={() => {
          ref.current.innerHTML = "Value2 to child";
          console.log(ref);
        }}>
        In App
      </button>
    </>
  );
};