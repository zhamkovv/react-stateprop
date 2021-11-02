import React, { Component } from 'react';

class EventCounter extends Component {
  constructor(props) {
    super(props);
    if (!props.value)
      this.state = {
        counter: 1,
      };
    else this.state = { counter: props.value };
  }

  handleCount = () => this.setState({ counter: this.state.counter / 1 + 1 });
  render() {
    return (
      <div>
        <h2>
          Счетчик с передачей начального значения props = {this.props.value}
        </h2>
        <button onClick={this.handleCount} className="App-link">
          {this.state.counter} рендеров
        </button>
      </div>
    );
  }
}

const EventCounters = () => (
  <>
    <EventCounter />
    <EventCounter value="3" />
    <EventCounter value="5" />
    <EventCounter value="njwefkbca" />
  </>
);

export default EventCounters;
