import React from "react";

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
  handleHide = () => this.setState({ visibility: !this.state.visibility });
  render() {
    if (this.state.visibility) {
      return (
        <div className='hh1'>
          <div className='App-header hh1'>
            <h1>{this.state.name}</h1>
            <button
              onClick={this.handleChange}
              className='App-link'
              href='#'
              rel='noopener noreferrer'>
              Change!
            </button>
          </div>
          <div className='App-header'>
            <input type='checkbox' checked onChange={this.handleHide} />
            <label value=''>Uncheck to Hide!</label>
          </div>
        </div>
      );
    } else {
      return (
        <div className='hh1'>
          <div className='App-header hh1'>
            <h1 style={{ color: "#102f38" }}>
              Чтобы вертикаль не ехала, оставил h1 (:
            </h1>
            <button
              onClick={this.handleChange}
              className='App-link'
              href='#'
              rel='noopener noreferrer'>
              Change but see when draw V below ;)
            </button>
          </div>
          <div className='App-header'>
            <input type='checkbox' onChange={this.handleHide} />
            <label value=''>Draw!</label>
          </div>
        </div>
      );
    }
  }
}
