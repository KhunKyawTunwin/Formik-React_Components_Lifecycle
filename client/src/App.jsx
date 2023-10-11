import { Component } from "react";
import Demo from "./demo";

import Cardlist from "./components/cardlist/Cardlist";
import Eventbinding from "./components/event-binding/Eventbinding";
import Parent from "./components/method-props/Parent";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Details from "./components/pages/Details";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      name: "Mrkhun Kyawtunwin",
    };
    console.log("1 Contructor", this.state);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ players: users }));
    console.log("4 ComponentDidmout", this.state);
  }

  // Return true or false! (true == always update and false never return.)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5 Current state name", this.state.name);
    console.log("6 Nextstate name", nextState.name);
    return (
      nextState.name !== this.state.name ||
      nextState.players !== this.state.players
    );
  }

  // Last render
  componentDidUpdate() {
    console.log("9 ComponentDidUpdated!", this.state);
  }

  render() {
    console.log("rendder state", this.state);
    console.log("2 7 App component", this.state);
    return (
      <main>
        {console.log("3 8 return data")}
        <Cardlist players={this.state.players} />
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.setState({ name: "Mr Web DEV" })}>
          Click Me
        </button>
        {console.log(this.state)}
      </main>
    );
  }
}

export default App;
