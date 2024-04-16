import { useState } from "react";

function AddNotes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, description: description }),
      });
      const data = await response.json();
      console.log(data); // Log the response data
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    postData(); // Call postData to make the POST request
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginInline: "450px" }}>
        {" "}
        {/* Call handleSubmit on form submission */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          style={{
            backgroundColor: "#E2D9CD",
            padding: "10px",
            border: "none",
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleChange}
          style={{
            backgroundColor: "#E2D9CD",
            padding: "10px",
            border: "none",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#E2D9CD",
            padding: "10px",
            border: "none",
          }}
        >
          ADD
        </button>
        {/* Use type='submit' to trigger form submission */}
      </form>
    </div>
  );
}

export default AddNotes;
