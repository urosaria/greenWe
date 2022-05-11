import React, { useState } from 'react';
import { addNote } from './noteSlice'
import { useSelector, useDispatch } from 'react-redux'

const NoteForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addNote(input));
  };

  return (
    <form onSubmit={handleAddNote}>
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something..."
      />
      <button type="submit">ENTER</button>
    </form>
  );
}
export default NoteForm;
