import { combineReducers } from 'redux';

import token from './token';
import something from './something';

let reduce = combineReducers({
  token:token,
  something:something
})

export default reduce;
