import React from 'react';
import Footer from './Footer'; //importing the created components
import Header from './Header';

export default class Layouts extends React.Component {
  render() {
    var age = "30"; // data down, since Layouts is the parent.
    return (
      <div>
        <Header  />
        <Footer my_age={age}/>
      </div>
    );
  }
}
