import React from "react";

const UserComp = (props) => {
  const User = (name) => <h1>{props.name}</h1>;

  // const UserContainer = (props) => <User />;

  // const HoC = (Component) => {
  //   const Wrapper = (props) => <Component userName="Ivan"/>
  // return Wrapper
  // }
  const HoC = (Component1, props) => {
    return (props) => <Component1 {...props}/>;
  };

  const NewComp = HoC(User,props);
  return (
    <>
      <NewComp {...props}/>
    </>
  );
};
export default UserComp;
