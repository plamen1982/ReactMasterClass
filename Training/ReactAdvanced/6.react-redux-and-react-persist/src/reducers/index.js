import { combineReducers } from 'redux';

import user from './user';
import counter from './counter';
import todos from './todos';
export default combineReducers({
    user,
    counter,
    todos
});
