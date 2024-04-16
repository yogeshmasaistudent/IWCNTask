// File: models/Note.js
// Description: Model file for handling notes

const pool = require("../config/database");

// Get all notes from the database
async function getAllNotes() {
  const [rows] = await pool.query("SELECT * FROM Note");
  return rows;
}

// Get a note by its ID
async function getNoteById(id) {
  const [rows] = await pool.query("SELECT * FROM Note WHERE id = ?", [id]);
  return rows[0];
}

// Create a new note in the database
async function createNote(title, description) {
  await pool.query("INSERT INTO Note (title, description) VALUES (?, ?)", [
    title,
    description,
  ]);
}

// Update an existing note in the database
async function updateNote(id, title, description) {
  await pool.query("UPDATE Note SET title = ?, description = ? WHERE id = ?", [
    title,
    description,
    id,
  ]);
}

// Delete a note from the database
async function deleteNote(id) {
  await pool.query("DELETE FROM Note WHERE id = ?", [id]);
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
