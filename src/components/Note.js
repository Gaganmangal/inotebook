import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Note = () => {
  const { notes } = useContext(NoteContext);

  // Display Note in screen
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Note is here</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Note;
