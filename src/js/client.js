import React from 'react';
import ReactDOM from 'react-dom';
import Layouts from './components/Layouts'; //importing the Layouts component that has 2 other child components


//Defining a component:
class Main extends React.Component {
  render() {
    var name = "Anand";
    return (
      <div class="container">
        <h1>React JS is Working!!!</h1>
        <h1>It can do some math: {1+1+2+3+5}</h1>
        <h1>It can render Const: {name}</h1>
        <Layouts />
      </div>);
    };
};

ReactDOM.render(<Main />, document.getElementById("root")); // components rendered to html. 1st argument is the Main component that has all the rest in it, 2nd argument is the mountNode.
