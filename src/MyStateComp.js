import React from "react";
import logo from "./logo.svg";

export default class MyStateComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Wolf Zhi",
      visibility: true,
    };
  }

  handleChange = () => {
    if (this.state.name !== "Voldemar Voldemarovich") {
      return this.setState({ name: "Voldemar Voldemarovich" });
    } else return this.setState({ name: "Wolf Zhi" });
  };
  handleHide = () => {
    this.setState({ visibility: !this.state.visibility });
  };

  render() {
    if (this.state.visibility) {
      return (
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1>{this.state.name}</h1>
            <button
              onClick={this.handleChange}
              className='App-link'
              href='#'
              rel='noopener noreferrer'>
              Change this!
            </button>
            <input type='checkbox' checked onChange={this.handleHide} />
            <label value=''>Hide V plz!</label>
          </header>
        </div>
      );
    } else {
      return (
        <div className='App'>
          <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 style={{color: '#102f38'}}>Чтобы вертикаль не ехала, оставил h1 (:</h1>
            <button
              onClick={this.handleChange}
              className='App-link'
              href='#'
              rel='noopener noreferrer'>
              Поменяй, увидишь когда уберешь хайд!
            </button>
            <input
              type='checkbox'
              onChange={this.handleHide}
            />
            <label value=''>Draw V plz!</label>
          </header>
        </div>
      );
    }
  }
}
