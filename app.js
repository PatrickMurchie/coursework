const express = require('express');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the React app's initial HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handle other routes using React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

client.connect(err => {
	if (err) {
	  console.error(err);
	} else {
	  console.log('Connected to MongoDB');
  
	  // Start the server after connecting to the database
	  app.listen(3000, () => {
		console.log('Server started on port 3000');
	  });
	}
  });