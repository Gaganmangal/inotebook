import NoteContext from "./NoteContext";
import React, { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "66b8b6cd4ae37b77fab028477",
      user: "66ae03459dcd9deb7cc09a3a",
      title: "Gagan Mangal",
      description: "Please wait Gagan is coming",
      tag: "person",
      date: "2024-08-11T13:04:13.477Z",
      __v: 0,
    },
    {
      _id: "66b8b6cd4ae37b77fab028457",
      user: "66ae03459dcd9deb7cc09a3a",
      title: "Gagan Mangal",
      description: "Please wait Gagan is coming",
      tag: "person",
      date: "2024-08-11T13:04:13.477Z",
      __v: 0,
    },
    {
      _id: "66b8b6cd4ae37b77fab025847",
      user: "66ae03459dcd9deb7cc09a3a",
      title: "Gagan Mangal",
      description: "Please wait Gagan is coming",
      tag: "person",
      date: "2024-08-11T13:04:13.477Z",
      __v: 0,
    },
    {
      _id: "66b8b6cd4ae37b77fab052847",
      user: "66ae03459dcd9deb7cc09a3a",
      title: "Gagan Mangal",
      description: "Please wait Gagan is coming",
      tag: "person",
      date: "2024-08-11T13:04:13.477Z",
      __v: 0,
    },
    {
      _id: "66b8b6cd4ae37b77fab02847",
      user: "66ae03459dcd9deb7cc09a3a",
      title: "Gagan Mangal",
      description: "Please wait Gagan is coming",
      tag: "person",
      date: "2024-08-11T13:04:13.477Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
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
  const deleteNote = (id) => {
    console.log(id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL

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
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
