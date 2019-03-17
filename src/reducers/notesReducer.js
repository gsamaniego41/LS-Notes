import {notes} from "../dummy-data";

import {
  FETCH_NOTES_SUCCESS,
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
  UPDATE_NOTE_SUCCESS
} from "../actions";

const initialState = {notes: []};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      return {...state};

    case CREATE_NOTE_SUCCESS:
      return {...state, notes: [...state.notes, action.payload]};

    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };

    case UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            return action.payload;
          }
          return note;
        })
      };

    default:
      return state;
  }
};

export default notesReducer;
