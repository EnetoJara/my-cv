import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shouldSquash } from '../../redux/app/actions';
import './Header.scss';
class Header extends Component {
  onToggleHandler = evt => {
    evt.preventDefault();

    const { show, showSideBar } = this.props;

    return showSideBar(!show);
  };
  render() {
    return (
      <header className="main-header">
        <div className="main-header-line" />
        <div className="main-header__section">
          <div className="main-header__logo">logo</div>
          <div className="main-header__name">
            name
            <button onClick={this.onToggleHandler} type="button">
              side
            </button>
          </div>
        </div>
      </header>
    );
  }
}

const toState = state => {
  return {
    show: state.app.showSideBar,
  };
};

const toDispatch = {
  showSideBar: shouldSquash,
};

export default connect(
  toState,
  toDispatch,
)(Header);
