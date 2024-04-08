import React, { Component } from "react";

class OptionComponent extends Component {
  state = {
    fruits: ["orange"]
  };

  addFruit = () => {
    const newFruit = prompt("Enter the name of the fruit:");
    if (newFruit) {
      this.setState((prevState) => ({
        fruits: [...prevState.fruits, newFruit]
      }));
    }
  };

  deleteFruit = (index) => {
    const newFruits = [...this.state.fruits];
    newFruits.splice(index, 1);
    this.setState({ fruits: newFruits });
  };

  render() {
    return (
      <>
        <h6>Click below options to add or delete</h6>
        <ul style={{listStyleType:"none"}}>
          {this.state.fruits.map((fruit, index) => (
            <li key={index}>
              {fruit}
              <button onClick={() => this.deleteFruit(index)}>
                Delete fruit
              </button>
            </li>
          ))}
        </ul>
        <button onClick={this.addFruit}>Add fruit</button>
      </>
    );
  }
}

export default OptionComponent;
