

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const PUBLIC_PATH = path.join(__dirname, "client", "build");
const DB_URI = 'mongodb://127.0.0.1:27017'

// Create express app with HTTP server
const app = express();
app.use(cors());
// Set the view engine to ejs for template rendering
app.set("view engine", "ejs");

// Make JSON sent in the request body available as req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(PUBLIC_PATH));

// Routes
app.get('/', (req, res) => {
    // handle GET request for /Home path
    res.sendFile(path.join(__dirname, 'client', 'src', 'routes', 'index.html'));
  });

// Connect to database
mongoose.connect(DB_URI, { useNewUrlParser: true });

// Start server listening for requests
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));