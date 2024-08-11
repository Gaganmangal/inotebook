import noteContext from "./noteContext";
import React, { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
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
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
