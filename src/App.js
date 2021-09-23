import React from "react";

import "./App.css";
import logo from "./logo.svg";

import MyStateComp from "./MyStateComp";
import EventCounter from "./EventCouner";
import UserComp from "./UserComp";
import ForwardBut from "./ForwardBut";
import ContextMind from "./ContextMind";
import Routing from "./Routing";

function App() {
  return (
    <div className='App'>
      <header className='App-header hh1'>
        <img src={logo} className='App-logo' alt='logo' />
        <ForwardBut />
        <MyStateComp />
      </header>
            <Routing />

      <h1>Events Handling</h1>
      <div className='Content'>
        <EventCounter />
        <EventCounter value='3' />
        <EventCounter value='5' />
        <EventCounter value='njwefkbca' />
      </div>
      <UserComp name='Events Handling with HoC props.name' />
      <div className='Content'>
        <h1>Context Mind</h1>
        <ContextMind />
      </div> 
    </div>
  );
}

export default App
