import React from "react";
const Noteitem = (props) => {
  const { note } = props;
  // create a Note Card
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur rerum praesentium, quaerat, hic facere
            minima ab voluptatum excepturi vel accusantium iusto cum officia
            provident, ipsa at dignissimos totam perferendis tenetur.
          </p>
          <i className="fa-solid fa-trash mx-1"></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
