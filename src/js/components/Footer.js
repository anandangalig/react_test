import React from 'react';
export default class Footer extends React.Component { //exporting this component
  render() {
    return (
      <div><p>A val passed from Parent => this.props.my_age: {this.props.my_age}</p></div>
    );
  }
}
