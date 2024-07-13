// Create web server
// Create a route for /comments
// Read the comments from comments.json and send the response to the client

const express = require('express');
const fs = require('fs');

const app = express();
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});