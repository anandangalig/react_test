import React from 'react';

export default class Header extends React.Component { //exporting this component

  handleChange(e){
    const name = e.target.value; //e.target is from the event being triggered with onChange.
    this.props.changeName(name); //sending the action up to Parent via props witht the new inputted name.
  }
  render() {
    return (
      <div>
        <p>A this.state passed from Parent & being updated via this.props.function => this.props.name: {this.props.name}</p>
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
