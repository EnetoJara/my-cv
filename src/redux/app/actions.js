import { createAction } from 'redux-actions';
import { SHOULD_SQUASH } from './types';

export const shouldSquash = createAction(SHOULD_SQUASH);
