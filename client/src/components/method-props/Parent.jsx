import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Parent Components",
    };
  }

  greeting = (child) => {
    alert(this.state.name + " " + child);
    console.log(this);
  };

  render() {
    return (
      <div>
        <Child handleGreet={this.greeting} />
      </div>
    );
  }
}

export default Parent;
