const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'project-root/public')));

// Serve CSS files from 'public/css'
app.use('/css', express.static(path.join(__dirname, 'project-root/public/css')));

// Serve images
app.use('/images', express.static(path.join(__dirname, 'project-root/public/images')));

// Serve external assets
app.use('/external', express.static(path.join(__dirname, 'project-root/public/external')));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project-root/public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
