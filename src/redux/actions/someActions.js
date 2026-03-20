// src/redux/actions/someActions.js
export const SOME_ACTION = 'SOME_ACTION';

export const someAction = (data) => ({
  type: SOME_ACTION,
  payload: { ...data },
});
