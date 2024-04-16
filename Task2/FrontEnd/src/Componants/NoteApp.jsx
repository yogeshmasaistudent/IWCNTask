import { useEffect, useState } from "react";
import AddNotes from "./AddNotes";
import Navbar from "./Navbar";
import "./NoteApp.css";
import NoteCard from "./NoteCard";



function NoteApp() {
  const [NotesData, SetNotesData] = useState([]);

  async function fetchData() {
    const res = await fetch(`http://localhost:5000/api/notes`);
    const data = await res.json();
    // console.log(data);
    SetNotesData(data);
  }
  console.log(NotesData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="NoteContainer">
        <div className="AddNotes">
          <AddNotes />
        </div>
        <NoteCard NotesData={NotesData} />
      </div>
    </div>
  );
}

export default NoteApp;
