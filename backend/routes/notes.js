const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1:Get All the Notes using: Get "/api/notes/fetchallnotes".Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occurred");
  }
});

//ROUTE 2:Add a new Notes using: POST "/api/notes/addnote".Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("title must be at least 5 characters long"),
    body("description")
      .isLength({ min: 5 })
      .withMessage("description must be at least 5 characters long"),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = await new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const SaveNote = await note.save();
      res.json(SaveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occurred");
    }
  }
);
//ROUTE 3:Update Notes using: PUT "/api/notes/Update/:id".Login required
router.put("/Update/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not Found");
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }
  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});

module.exports = router;
