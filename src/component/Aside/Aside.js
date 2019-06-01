import cx from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          <div className="main-aside__logo">logo</div>
          <div className="main-aside__cv">curriculum vitae</div>
          <div>design</div>
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
