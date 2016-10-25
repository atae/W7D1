import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from '../actions/tracks_actions';

const recording = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      let newState = true;
      return newState;
    case STOP_RECORDING:
      newState = false;
      return newState;
    default:
      return state;
  }
};


export default recording;
