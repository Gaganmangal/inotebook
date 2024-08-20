import NoteContext from "./NoteContext";
import React, { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get a Note
  const getNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhZTAzNDU5ZGNkOWRlYjdjYzA5YTNhIn0sImlhdCI6MTcyMjc1NjcwNX0.CBgEYrgEdfJpfOp4JpBOTRyNJTLSogusK-nKKIsbdfs",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhZTAzNDU5ZGNkOWRlYjdjYzA5YTNhIn0sImlhdCI6MTcyMjc1NjcwNX0.CBgEYrgEdfJpfOp4JpBOTRyNJTLSogusK-nKKIsbdfs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    if (!response.ok) {
      console.error("Failed to add note:", response.statusText);
      return;
    }
    const note = {
      _id: "66b8b6cd4aes37b77fab02847",
      user: "66ae03459dcd9deb7cc09a3a",
      title: title,
      description: description,
      tag: tag,
      date: "2024-08-11T13:04:13.477Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // // Delete a Note
  const deleteNote = async (id) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhZTAzNDU5ZGNkOWRlYjdjYzA5YTNhIn0sImlhdCI6MTcyMjc1NjcwNX0.CBgEYrgEdfJpfOp4JpBOTRyNJTLSogusK-nKKIsbdfs",
      },
    });
    const json = response.json();
    console.log(json);
    console.log(id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
