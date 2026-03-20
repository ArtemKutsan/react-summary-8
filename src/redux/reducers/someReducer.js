// src/redux/reducers/bookStore.js
import { SOME_ACTION } from '../actions/someActions';

const initialState = {};

const someReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION:
      return { ...state };

    default:
      return state;
  }
};

export default someReducer;
