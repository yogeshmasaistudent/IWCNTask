import React, { useState } from "react";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://chimpu.xyz/api/post.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phonenumber: phoneNumber }), // Use the correct variable name 'phonenumber'
      });

      // Check if the response headers contain the 'post' header
      if (response.headers.has("post")) {
        const data = await response.headers.get("post");
        setResponseData(data);
      } else {
        console.error(
          "The 'post' header is missing from the response headers."
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {responseData && (
        <div>
          <h3>Data received in headers:</h3>
          <p>{responseData}</p>
        </div>
      )}
    </div>
  );
};

export default App;
