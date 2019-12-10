import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import mailReducer from './mail';
import authReducer from './auth';
import accountReducer from './account';
import recipientsReducer from './recipients';

const rootReducer = combineReducers({
  mail: mailReducer,
  auth: authReducer,
  account: accountReducer,
  recipients: recipientsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
