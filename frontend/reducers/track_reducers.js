import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from "../actions/tracks_actions";
import { merge } from 'lodash/merge';

const _defaultState = {};
let currTrackId = 0;


const tracks = (state = _defaultState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      let newTrack = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      let newState = merge(state, newTrack);
      return newState;
    case STOP_RECORDING:
      let newRoll = {
        notes: [],
        timeSlice: action.timeNow - state[currTrackId].timeStart
      };
      let coppyState = merge({}, state);
      coppyState = [currTrackId].roll.concat(newRoll);
      return coppyState;
    case ADD_NOTES:
      newRoll = {
        notes: action.notes,
        timeSlice: action.timeNow - state[currTrackId].timeStart
      };
      coppyState = merge({}, state);
      coppyState = [currTrackId].roll.concat(newRoll);
      return coppyState;
    default:
      return state;
  }
};

export default tracks;
