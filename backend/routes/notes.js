const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1:Get All the Notes using: Get "/api/auth/fetchallnotes".Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occurred");
  }
});

//ROUTE 2:Add a new Notes using: POST "/api/auth/addnote".Login required
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

module.exports = router;
