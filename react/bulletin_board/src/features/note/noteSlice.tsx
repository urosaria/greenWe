import { createSlice } from "@reduxjs/toolkit";

interface NoteState {
  count: number,
  idGenerator: number,
  notes : {
    id: number,
    content: string,
  }[];
}

const initialState: NoteState = {
  count: 0,
  idGenerator: 0,
  notes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = {
        id: state.idGenerator+1,
        content: action.payload,
      };
      state.notes.push(note);
      state.count += 1;
      state.idGenerator += 1;
    },
    removeNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
