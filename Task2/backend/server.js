// File: server.js
// Description: Main server file to start the application
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const noteRoutes = require("./routes/noteRoutes");

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use("/api", noteRoutes); // Mount the noteRoutes under the '/api' prefix

// Start the server and print the URL
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is running at http://localhost:${port}`);
});
