import React from "react";
import "./App.css";
import MyStateComp from "./MyStateComp";
import EventCounter from "./EventCouner";
import logo from "./logo.svg";

function App() {
  return (
    <div className='App'>
      <header className='App-header hh1'>
        <img src={logo} className='App-logo' alt='logo' />
        <MyStateComp />
      </header>
      <h1>Events Handling</h1>
      <div className='Content'>
        <EventCounter />
        <EventCounter value='3' />
        <EventCounter value='5' />
        <EventCounter value='njwefkbca' />
      </div>
    </div>
  );
}

export default App;
