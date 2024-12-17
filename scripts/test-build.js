const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the out directory
app.use('/lesson-sets', express.static(path.join(__dirname, '../out')));

// Redirect root to lesson-sets
app.get('/', (req, res) => {
  res.redirect('/lesson-sets');
});

// Handle all routes for the Next.js app
app.get('/lesson-sets/*', (req, res) => {
  // Send the index.html for any route under /lesson-sets
  res.sendFile(path.join(__dirname, '../out/index.html'));
});

// Catch-all for old /lessons routes and redirect them
app.get('/lessons/*', (req, res) => {
  const newPath = req.path.replace('/lessons/', '/lesson-sets/');
  res.redirect(newPath);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Test server running at http://localhost:${PORT}/lesson-sets`);
  console.log('Press Ctrl+C to stop');
});