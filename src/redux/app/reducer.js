import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  showSideBar: false,
};

const _shouldSquash = (s, a) => {
  const aux = s.showSideBar;
  return {
    ...s,
    showSideBar: !aux,
  };
};

const reducer = handleActions(
  new Map([[actions.shouldSquash, _shouldSquash]]),
  initialState,
);
export default reducer;
