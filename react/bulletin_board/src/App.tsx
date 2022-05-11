import React, { useState, useEffect } from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from './store'

import NoteForm from "./features/note/noteForm";
import NoteList from "./features/note/noteList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Bulletin Board</h1>
      </header>
      <Content />
    </div>
  );
}

function Content() {
  const count = useSelector((state: RootState) => state.note.count);
  const notes = useSelector((state: RootState) => state.note.notes);

  return (
    <div id="React-container">
      <NoteForm />
      {count > 0 &&
        <NoteList notes={notes}></NoteList>
      }
    </div>
  )
}

export default App;
