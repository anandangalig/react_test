import React from 'react';
import Footer from './Footer'; //importing the created components
import Header from './Header';

export default class Layouts extends React.Component {
  constructor() {
    super();
    this.state = {name: "Anand"};
  }

  changeName(name){
    this.setState({name});
  }

  render() {
    var age = "30"; // data down, since Layouts is the parent: anything passed becomes this.props!
    return (
      <div>
        <Header changeName={this.changeName.bind(this)} name={this.state.name}/>
        <Footer my_age={age}/>
      </div>
    ); //DO NOT forget to .bind(this) --> runs the method here. Otherwise, it will try to run it in the Child, but fail.
  }
}
