import "./NoteCard.css";
import { MdDelete } from "react-icons/md";
function NoteCard({ NotesData}) {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Trigger onDelete callback to update UI after successful delete
        
      } else {
        console.error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div>
      <div className="card">
        {NotesData.map((note) => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <MdDelete onClick={() => handleDelete(note.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteCard;
