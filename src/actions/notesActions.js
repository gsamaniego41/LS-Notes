import {notes} from "../dummy-data";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAIL = "FETCH_NOTES_FAIL";
export const CREATING_NOTE = "CREATING_NOTE";
export const CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS";
export const CREATE_NOTE_FAIL = "CREATE_NOTE_FAIL";
export const DELETING_NOTE = "DELETING_NOTE";
export const DELETING_NOTE_SUCCESS = "DELETING_NOTE_SUCCESS";
export const DELETING_NOTE_FAIL = "DELETING_NOTE_FAIL";
export const UPDATING_NOTE = "UPDATING_NOTE";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const UPDATE_NOTE_FAIL = "UPDATE_NOTE_FAIL";

export const fetchNotes = () => {
  return {type: FETCH_NOTES_SUCCESS, payload: notes};
};

export const createNote = newNote => {
  return {type: CREATE_NOTE_SUCCESS, payload: newNote};
};

export const deleteNote = id => {
  return {type: DELETING_NOTE_SUCCESS, payload: id};
};

export const updateNote = (id, updatedNote) => {
  return {type: UPDATE_NOTE_SUCCESS, payload: {id, updatedNote}};
};
