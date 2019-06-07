import cx from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { shouldSquash } from '../../redux/app/actions';
import './Aside.scss';

class Aside extends Component {
  constructor(priop) {
    super(priop);
  }

  componentDidMount = () => {};

  onClickHandler = evt => {
    evt.preventDefault();

    const { show, showSideBar } = this.props;

    return showSideBar(!show);
  };
  render() {
    const { show } = this.props;

    return (
      <React.Fragment>
        <aside
          className={cx('main-aside', {
            'main-aside__full': show,
            hide: !show,
          })}
        >
          <div className="main-aside__logo">
            <img
              src="https://via.placeholder.com/271x80.png/09f/fff"
              alt="logo image"
            />
          </div>
          <div className="main-aside__section">
            <Link className="main-aside__section-link" to="/money-manager">
              Money Manager
            </Link>
          </div>
          <div className="main-aside__section">
            <Link className="main-aside__section-link" to="/design1">
              Design 1
            </Link>
          </div>
          <div className="main-aside__section">
            <Link className="main-aside__section-link" to="/about-me">
              About Me
            </Link>
          </div>
        </aside>
        <button
          onClick={this.onClickHandler}
          className={cx('aside-bg', { display: !show })}
        />
      </React.Fragment>
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
)(Aside);
