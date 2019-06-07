import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import './wrapper.scss';

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Aside />
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default Wrapper;
