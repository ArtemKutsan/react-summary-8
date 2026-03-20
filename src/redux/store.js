import { createStore, combineReducers } from 'redux';
import someReducer from './reducers/someReducer';

const rootReducer = combineReducers({
  reducer: someReducer,
});

const store = createStore(rootReducer);

export default store;
