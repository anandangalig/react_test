import React from 'react';
import ReactDOM from 'react-dom';

//Defining a component:
var Button = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.localHandleClick}>+1</button>
    )
  }
});

//Defining another component:
var Result = React.createClass({
  render: function() {
    return (
      <div>{this.props.localCounter}</div> //props=properties
    )
  }
})

//Defining the main component that houses the otheres
var Main = React.createClass({
  getInitialState: function() { //global function that is seeding data for the component's internally-controlled state
    return {counter: 0};
  },
  handleClick: function() {
    this.setState({ counter: this.state.counter + 1 });
  },
  render: function() {
    return (
      <div>
        <Button localHandleClick={this.handleClick} />
        <Result localCounter={this.state.counter} />
      </div>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById("container")); // components rendered to html. 1st argument is the Main component that has all the rest in it, 2nd argument is the mountNode.
