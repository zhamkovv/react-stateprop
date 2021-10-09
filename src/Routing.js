import React from "react";
import {
  BrowserRouter, NavLink,
  Redirect, Route, Switch
} from "react-router-dom";
import "./App.css";
import AxiosJson from "./AxiosJson";
import ConditionRender from "./ConditionRender";
import ContextMind from "./ContextMind";
import EventCounter from "./EventCouner";
import ForwardBut from "./ForwardBut";
import LifeCycleMedia from "./LifeCycleMedia";
import logo from "./logo.svg";
import MyContext from "./MyContext";
import MyStateComp from "./MyStateComp";
import ScooterShop from "./ScooterShop";
import StateUp from "./StateUp";
import UseHooks from "./UseHooks";
import UserComp from "./UserComp";


const withPage = (Component) => {
  const WrapperPage = (props) => (
    <>
      <h1>{Component.name}</h1>
      <div>
        {Component}
        {Component.props}
      </div>
    </>
  );
  return WrapperPage;
};

const Homepage = () => (
  <span name='Главная'>Выберите компонент в меню для демо его работы</span>
);
const HomepageComponent = withPage(Homepage);
const EventCounters = () => (
  <>
    <EventCounter />
    <EventCounter value='3' />
    <EventCounter value='5' />
    <EventCounter value='njwefkbca' />
  </>
);
const listComponents = [
  <Homepage />,
  <AxiosJson />,
  <ForwardBut />,
  <MyStateComp />,
  <EventCounters />,
  <UserComp name='Events Handling with HoC props.name' />,
  <ContextMind />,
  <LifeCycleMedia />,
  <MyContext />,
  <ScooterShop />,
  <UseHooks arg={77} />,
  <ConditionRender />,
  <StateUp />,
];

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component2";
};
const Name2 = getDisplayName(HomepageComponent);
console.log(listComponents);
console.log(listComponents[3].type.name);
console.log(Name2);
const Routing = () => {
  const menu = listComponents.map((i, key) => (
    <div>
      <NavLink
        key={key}
        activeStyle={{ fontWeight: "bold" }}
        to={"/" + i.type.name + "/"}>
        {i.type.name}
      </NavLink>
    </div>
  ));

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Components Feed</h1>
      </header>
      <div className='App'>
        <BrowserRouter>
          <nav>
            <div className='App-menu'>{menu}</div>
          </nav>
          <Switch>
            {listComponents.map((i, key) => (
              <Route path={"/" + i.type.name + "/"} key={key}>
                <h1>{i.type.name}</h1>
                {i}
              </Route>
            ))}
          </Switch>
          <Redirect from='/123' to='/HomePage/'></Redirect>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Routing;
