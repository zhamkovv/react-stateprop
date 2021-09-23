import React from "react";

class LifeCycleMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "desktop" };
  }

  componentDidMount() {
    const checkMediaQuery = () => {
      const type = window.matchMedia("(min-width: 1021px)").matches
        ? "desktop"
        : "mobile";
      if (type !== this.state.type) {
        this.setState((prevState) => { 
          console.log(prevState); 
          return { type }
        });
      }
    };

    window.addEventListener("resize", checkMediaQuery);
    checkMediaQuery();
  }

  render() {
    return <><span>{this.state.type}</span> this.props.children;</>
  }
}
export default LifeCycleMedia
