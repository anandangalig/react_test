import React from 'react';
import Footer from './Footer'; //importing the created components
import Header from './Header';

export default class Layouts extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
