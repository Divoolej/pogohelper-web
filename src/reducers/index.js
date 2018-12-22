import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import pokemon from './pokemon-reducer';

const reducer = history => combineReducers({
  router: connectRouter(history),
  pokemon,
});

export default reducer;
