import React, { Component } from 'react';
import About from './AboutMe';
import Languajes from './Languajes';
import './MyCv.scss';
import Working from './Working';

class MyCv extends Component {
  render() {
    return (
      <div className="my-cv-section">
        <div className="my-cv-section-aside">
          <img src="./images/profile.jpg" />
          <h1 className="title-name">Ernesto Jara Olveda</h1>
          <small>Tell me I {"can't"} and I will.</small>
          <small>Aptitude over knowledge</small>
          <About />
          <Languajes />
        </div>
        <div className="my-cv-section-main">
          <Working />
        </div>
      </div>
    );
  }
}

export default MyCv;
