import { Component } from "react";

class Demo extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam
          magni, dolore expedita laudantium neque eius saepe. Molestias
          voluptates aspernatur necessitatibus, exercitationem, atque ex
          mollitia, eos voluptas iusto quo minima?
        </p>
      </div>
    );
  }
}

export default Demo;
