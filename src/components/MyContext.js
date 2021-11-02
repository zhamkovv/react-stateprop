import React, { createContext, useContext } from "react";
const Count = createContext(0);

// const Level3 = () => (
//   <Count.Consumer>{(value) => <h1>{value}</h1>}</Count.Consumer>
// );
const Level3 = () => {
  const count = useContext(Count);
  return <h1>{count}</h1>;
};
const Level2 = () => <Level3 />;

const Level1 = () => <Level2 />;

const MyContext = () => (
  <Count.Provider value={1}>
    <Level1 />
  </Count.Provider>
);

export default MyContext;
