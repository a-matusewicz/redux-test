// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SELECT: 'SELECT',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

export function selectVideo(video) {
  return {
    type: ActionTypes.SELECT,
    payload: video,
  };
}
