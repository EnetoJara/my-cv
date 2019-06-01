import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyCv from '../MyCv/MyCv';
import './Main.scss';
class Main extends Component {
  render() {
    return (
      <main className="main">
        <Header />
        <div className="main-section">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MyCv} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Main;
