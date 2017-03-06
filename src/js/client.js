import React from 'react';
import ReactDOM from 'react-dom';
import Layouts from './components/Layouts'; //importing the Layouts component that has 2 other child components


//Defining a component:

class Button extends React.Component {
  render() {
    return (<button class="btn btn-success" onClick={this.props.localHandleClick}>+1</button>);
  }
};

// Defining another component:
class Result extends React.Component {
  render() {
    return (<div>{this.props.localCounter}</div>);
  }
};


//Defining the main component that houses the otheres

class Main extends React.Component {
//   getInitialState: function() { //global function that is seeding data for the component's internally-controlled state
//   return {counter: 0};
// },
//   handleClick: function() {
//     this.setState({ counter: this.state.counter + 1 });
//   },
  render() {
    var name = "Anand";
    return (
      <div class="container">
        <h1>React JS is Working!!!</h1>
        <h1>It can do some math: {1+1+2+3+5}</h1>
        <h1>It can render Const: {name}</h1>
        <Layouts />
      </div>);
      // <Button localHandleClick={this.handleClick} />
      // <Result localCounter={this.state.counter} />
    };
};

ReactDOM.render(<Main />, document.getElementById("root")); // components rendered to html. 1st argument is the Main component that has all the rest in it, 2nd argument is the mountNode.
