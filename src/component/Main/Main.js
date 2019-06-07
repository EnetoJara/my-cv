import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Design1 from '../Design1/Design1';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Money from '../MoneyManager/MoneyManager';
import MyCv from '../MyCv/MyCv';
import './Main.scss';

const redirectTo = route => () => <Redirect to={route} />;
class Main extends Component {
  render() {
    return (
      <main className="main">
        <Header />
        <div className="main-section">
          <Switch>
            <Route exact path="/money-manager" component={Money} />
            <Route exact path="/design1" component={Design1} />
            <Route exact path="/about-me" component={MyCv} />
            <Route path="*" render={redirectTo('/about-me')} />
          </Switch>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Main;
