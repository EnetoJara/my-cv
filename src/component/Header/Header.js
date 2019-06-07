import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shouldSquash } from '../../redux/app/actions';
import Quater from '../../styles/icons/equalizer.svg';
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
          <button
            className="main-header__btn-sidebar"
            onClick={this.onToggleHandler}
            type="button"
          >
            <Quater className="main-header__icon" />
          </button>

          <div className="main-header__name">name</div>
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
