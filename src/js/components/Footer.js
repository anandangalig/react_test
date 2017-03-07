import React from 'react';
export default class Footer extends React.Component { //exporting this component
  render() {
    return (
      <div><p>{this.props.my_age}</p></div>
    );
  }
}
