import React, { Fragment } from "react";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";

import MyStateComp from "./MyStateComp";
import EventCounter from "./EventCouner";
import UserComp from "./UserComp";
import ForwardBut from "./ForwardBut";
import ContextMind from "./ContextMind";
import MyContext from "./MyContext";
import LifeCycleMedia from "./LifeCycleMedia";
import AxiosJson from "./AxiosJson";
import ScooterShop from './ScooterShop';
import UseHooks from './UseHooks';


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
  <AxiosJson/>,
  <ForwardBut />,
  <MyStateComp />,
  <EventCounters />,
  <UserComp name='Events Handling with HoC props.name' />,
  <ContextMind />,
  <LifeCycleMedia/>,
  <MyContext/>,
  <ScooterShop />,
  <UseHooks arg={77} />
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
        activeStyle={{ fontWeight: 'bold' }}
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
          <Redirect from="/123" to="/HomePage/"></Redirect>
          </BrowserRouter>
        </div>
    </div>
  );
};

export default Routing;
