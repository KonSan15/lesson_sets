const express = require('express');
const path = require('path');
const app = express();

const LESSON_SETS_PATH = '/lesson_sets';

// Serve static files from the out directory
app.use(LESSON_SETS_PATH, express.static(path.join(__dirname, '../out')));

// Handle all routes, including the root
app.get('*', (req, res) => {
  // Remove lesson_sets from the path if it exists
  const normalizedPath = req.path.replace(LESSON_SETS_PATH, '');
  
  // If it's the root path, serve index.html
  if (normalizedPath === '/' || normalizedPath === '') {
    return res.sendFile(path.join(__dirname, '../out/index.html'));
  }

  // Check if the file exists in the out directory
  const filePath = path.join(__dirname, '../out', normalizedPath);
  const htmlPath = path.join(__dirname, '../out', normalizedPath, 'index.html');

  try {
    if (require('fs').existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    } else if (require('fs').existsSync(filePath)) {
      return res.sendFile(filePath);
    }
    // If neither exists, serve the main index.html for client-side routing
    return res.sendFile(path.join(__dirname, '../out/index.html'));
  } catch (err) {
    return res.sendFile(path.join(__dirname, '../out/index.html'));
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Test server running at http://localhost:${PORT}${LESSON_SETS_PATH}`);
});