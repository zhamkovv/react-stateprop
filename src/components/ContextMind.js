import React, { Component } from "react";

const TitleContext = React.createContext();

const Level3 = () => (
  <TitleContext.Consumer>
    {({ title }) => <h1>{title}</h1>}
  </TitleContext.Consumer>
);
const Level2 = () => <Level3 />;
const Level1 = () => <Level2 />;

const ContextFunc = () => (
  <TitleContext.Provider value={{ title: "'Строка контекста'" }}>
    <Level1 />
  </TitleContext.Provider>
);

const TitleContextClass = React.createContext({ title: "Контекст класса" });

class Level3c extends Component {
  static contextType = TitleContextClass;
  render() {
    return <h1>{this.context.title}</h1>;
  }
}

const Level2c = () => <Level3c />;
const Level1c = () => <Level2c />;

class ContextClass extends Component {
  render() {
    return (
      <TitleContextClass.Provider value={{ title: "'Строка контекста'" }}>
        <Level1c />
      </TitleContextClass.Provider>
    );
  }
}

export default function ContextMind () {return <><ContextFunc/><ContextClass/></>}