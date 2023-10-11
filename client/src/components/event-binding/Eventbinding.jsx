import { Component } from "react";

class Eventbinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hi there, What are you doing?",
    };
  }

  handleClick = (e) => {
    this.setState({
      message: "Where and What happen!",
    });
    console.log(e);
  };

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Eventbinding;
