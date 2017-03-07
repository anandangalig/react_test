import React from 'react';

export default class Header extends React.Component { //exporting this component
  constructor() {
    super();
    this.state = {name: "Anand"};
  }
  render() {
    setTimeout(()=>{
      this.setState({name: "Baaya"});
    }, 20000);

    return (
      <div>
        <p>Greetings Earthlings</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
