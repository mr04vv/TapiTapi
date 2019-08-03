import { combineReducers } from 'redux';

import * as accounts from './accounts';

export default combineReducers({
  ...accounts,
});
