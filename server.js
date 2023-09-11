const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use process.env.PORT for Heroku deployment, default to 3000

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const mongoose = require('mongoose');

// Replace 'your_connection_string' with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/myappdb';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
