import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
const Noteitem = (props) => {
  const { deleteNote } = useContext(NoteContext);
  const { note, updateNote } = props;
  // create a Note Card
  return (
    <div className="col-md-3">
  <div className="card my-3 shadow-sm" style={{ borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
    <div className="card-body">
      <h5 className="card-title" style={{ color: "#4682b4" }}>
        {note.title}
      </h5>
      <p className="card-text" style={{ color: "#333" }}>
        {note.description}
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <i
          className="fa-solid fa-trash"
          style={{ color: "#ff6347", cursor: "pointer" }}
          onClick={() => {
            deleteNote(note._id);
          }}
        ></i>
        <i
          className="far fa-edit"
          style={{ color: "#32cd32", cursor: "pointer" }}
          onClick={() => {
            updateNote(note);
          }}
        ></i>
      </div>
    </div>
  </div>
</div>

  );
};

export default Noteitem;
