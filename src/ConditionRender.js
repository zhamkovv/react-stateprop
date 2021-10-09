import { action, makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import React, { Component } from "react";
import "./blog.css";
import data from "./data.json";

class StoreClass {
  number = 0;
  get color() {
    return this.number === 0
      ? "grey"
      : this.number > 0
      ? "#" + (this.number - 1) * 111111
      : "blue";
  }
  constructor() {
    makeAutoObservable(this, { dec: action.bound });
  }
  dec() {
    this.number--;
  }

  inc = () => {
    this.number++;
  };
}

const store = new StoreClass();
const ColorCondition = observer(
  class extends Component {
    render() {
      return (
        <div>
          <button onClick={store.dec}>-</button>
          <span style={{ color: store.color, fontSize: "35px" }}>
            {store.number}
          </span>
          <button onClick={store.inc}>+</button>
        </div>
      );
    }
  }
);

const Feed = ({ image, title, desc }) => {
  return (
    <div className='News2'>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};
class ConditionRender extends Component {
  state = {
    searchQuery: "",
  };

  setSearch = (evevnt) => {
    this.setState({ searchQuery: evevnt.target.value });
  };
  // data = (state.searchQuery) => {data.find(i => i.toLowerCase().includes(searchQuery.toLowerCase()))};

  // data = ({searchQuery}) => {
  //   return (
  //   data.find(i => i.toLowerCase().includes(this.state.searchQuery.toLowerCase())))
  //  }

  render() {
    const sdata = data.filter((i) => {
      return (
        i.desc.toLowerCase().includes(this.state.searchQuery.toLowerCase()) +
        i.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
    });

    var fdata;
    if (sdata.length !== 0) {
      fdata = sdata.map((props) => Feed(props));
    } else {
      fdata = (
        <div className='News2'>
          <div>
            <h2>Очень пусто и грустно ):</h2>
          </div>
        </div>
      );
    }

    return (
      <div className='App2'>
        <div className='App-header2'>
          <img
            src='data:image/jpeg;base64,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'
            className='App-logo2'
            alt='logo'
          />
          <h1>лучшие мемы автомира</h1>
          <input
            size='large'
            placeholder='Поиск'
            value={this.state.searchQuery}
            onChange={this.setSearch}
          />
                    <ColorCondition />
        </div>
        <div className='App-content2'>

          {fdata}
        </div>
      </div>
    );
  }
}

export default ConditionRender;
