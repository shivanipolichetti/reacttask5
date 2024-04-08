import { Component } from "react";
import OptionComponent from "./option";


class FruitComponent extends Component{
    state={
        isSubscribe:false,
        showfruits:[],
        text:"none"

    }
    changeSubscribe = () => {
        this.setState((prevState) => ({
          isSubscribe: !prevState.isSubscribe
        }));
      };
    
    render(){
        
        return(
            <div>
            <button onClick={this.changeSubscribe}>
              {this.state.isSubscribe ? this.state.showfruits : this.state.text}
            </button>
            <h3>{this.state.fruits}</h3>
            {this.state.isSubscribe ? (
              <>
                <h3>["apple", "mango", "grapes", "orange"]</h3>
                <OptionComponent
                  fruits={this.state.fruits}
                  setFruits={(fruits) => this.setState({ fruits })}
                />
              </>
            ) : (
              <h3>no fruits</h3>
            )}
          </div>
        )
    }
}
 export default FruitComponent;