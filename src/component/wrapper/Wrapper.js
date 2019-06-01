import React, { Component } from 'react';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import './wrapper.scss';

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Aside />
        <Main />
      </div>
    );
  }
}

export default Wrapper;
