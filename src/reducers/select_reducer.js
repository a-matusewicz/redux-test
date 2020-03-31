import { ActionTypes } from '../actions';

const SelectReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SELECT:
      return action.payload;
    default:
      return state;
  }
};

export default SelectReducer;
