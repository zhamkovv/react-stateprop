
import {
    action, makeAutoObservable
} from "mobx";
import { observer } from "mobx-react";
import React, { Component } from "react";
class StoreClass {
    number = 0;
    get color() {
      return this.number === 0
        ? "grey"
        : this.number > 0
        ? '#'+(1-this.number) * 111111
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
  const ConditionRender = observer(
    class extends Component {
      render() {
        return (
          <div>
            <button onClick={store.dec}>-</button>
            <span style={{ color: store.color }}>{store.number}</span>
            <button onClick={store.inc}>+</button>
          </div>
        );
      }
    }
  );
  
  export default ConditionRender;