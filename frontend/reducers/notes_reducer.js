import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES } from "../util/tones";

const _defaultState = [];

const notes = (state = _defaultState, action) => {
  Object.freeze(state);
  if (!NOTE_NAMES.includes(action.key)){
    return state;
  }

  switch(action.type) {
    case KEY_PRESSED:
    if (state.includes(action.key)) {
      return state;
    }
      return [...state, action.key];
    case KEY_RELEASED:
      if (state.includes(action.key)) {
        let i = state.indexOf(action.key);
        let newState = state.slice(0,i).concat(state.slice(i+1));
        return newState;
      } else {
        return state;
      }


    default:
      return state;
  }
};

export default notes;
