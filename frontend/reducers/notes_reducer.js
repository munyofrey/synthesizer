import {NotesConstants} from '../actions/note_actions';

const validKeys = ["a", "s", "d", "f", "g"];


const keyMap = {
  "a": "C5",
  "s": "D5",
  "d": "E5",
  "f": "F5",
  "g": "G5"
};

const notesReducer = (state = [], action) => {
  let idx;
  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      idx = state.indexOf(action.key);
      if ((idx === -1) && ( keyMap[action.key])) {
        return [...state, action.key];
      } else {
        return state;
      }
    case NotesConstants.KEY_RELEASED:
    // debugger;
      idx = state.indexOf(action.key);
      if ((idx !== -1) && ( keyMap[action.key])) {
        return state.slice(0, idx).concat(state.slice(idx + 1));
      } else {
        return state;
      }
    default:
      return state;
  }
};




export default notesReducer;
