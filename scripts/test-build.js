const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the out directory
app.use('/lesson_sets', express.static(path.join(__dirname, '../out')));

// Redirect root to lesson_sets
app.get('/', (req, res) => {
  res.redirect('/lesson_sets');
});

// Handle all routes for the Next.js app
app.get('/lesson_sets/*', (req, res) => {
  // Send the index.html for any route under /lesson_sets
  res.sendFile(path.join(__dirname, '../out/index.html'));
});

// Catch-all for old /lessons routes and redirect them
app.get('/lessons/*', (req, res) => {
  const newPath = req.path.replace('/lessons/', '/lesson_sets/');
  res.redirect(newPath);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Test server running at http://localhost:${PORT}/lesson_sets`);
  console.log('Press Ctrl+C to stop');
});