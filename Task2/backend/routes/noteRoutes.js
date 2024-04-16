// File: routes/noteRoutes.js
// Description: Routes file for CRUD operations on notes

const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// GET all notes
router.get("/notes", async (req, res) => {
  const notes = await Note.getAllNotes();
  res.json(notes);
});

// GET note by ID
router.get("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const note = await Note.getNoteById(id);
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json(note);
});

// POST create a new note
router.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  await Note.createNote(title, description);
  res.status(201).json({ message: "Note created successfully" });
});

// PUT update a note
router.put("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  await Note.updateNote(id, title, description);
  res.json({ message: "Note updated successfully" });
});

// DELETE a note
router.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await Note.deleteNote(id);
  res.json({ message: "Note deleted successfully" });
});

module.exports = router;
