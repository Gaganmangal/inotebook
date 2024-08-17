import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
const Noteitem = (props) => {
  const { deleteNote } = useContext(NoteContext);;
  const { note } = props;
  // create a Note Card
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}
          </p>
          <i className="fa-solid fa-trash mx-1"onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
