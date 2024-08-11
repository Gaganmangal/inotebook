import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Note = () => {
  const { notes } = useContext(noteContext);

  return (
    <>
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
