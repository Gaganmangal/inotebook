import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const { addNote } = useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Add Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-1">
      <div
        className="card shadow-lg"
        style={{ borderRadius: "15px", backgroundColor: "#f9f9f9" }}
      >
        <div className="card-body">
          <h2
            className="text-center mb-4"
            style={{ color: "#8e44ad", fontSize: "2rem" }}
          >
            Add Note
          </h2>
          <form>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="form-label"
                style={{ color: "#8e44ad", fontSize: "1.25rem" }}
              >
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="titleHelp"
                value={note.title}
                onChange={onChange}
                style={{
                  borderColor: "#8e44ad",
                  backgroundColor: "#f3e5f5",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="description"
                className="form-label"
                style={{ color: "#8e44ad", fontSize: "1.25rem" }}
              >
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={note.description}
                onChange={onChange}
                style={{
                  borderColor: "#8e44ad",
                  backgroundColor: "#f3e5f5",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="tag"
                className="form-label"
                style={{ color: "#8e44ad", fontSize: "1.25rem" }}
              >
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                value={note.tag}
                onChange={onChange}
                style={{
                  borderColor: "#8e44ad",
                  backgroundColor: "#f3e5f5",
                  fontSize: "1rem",
                }}
              />
            </div>
            <button
              disabled={note.title.length < 5 || note.description.length < 5}
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#8e44ad",
                color: "#fff",
                fontSize: "1rem",
              }}
              onClick={handleClick}
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
