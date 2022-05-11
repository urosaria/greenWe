import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";
import { removeNote } from './noteSlice'


interface ItemsProps {
  notes : {
    id: number,
    content: string,
  }[];
}

const NoteList = ({ notes }: ItemsProps) => {
  const dispatch = useDispatch();

  return (
    <div>
      {notes.map(note => {
        return (
          <div key={note.id} className="inline">
            <Draggable>
              <div className="item">
                <button className="delete"
                        onClick={() => dispatch(removeNote(note.id))}
                >
                  X
                </button>
                <p>[{note.id}] {note.content}</p>
              </div>
            </Draggable>
          </div>
        )
      })}
    </div>
  );
}

export default NoteList;
