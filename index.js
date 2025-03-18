const express = require('express');
const app = express();
const path = require('path');

// Set the public directory for serving static files
app.use(express.static(path.join(__dirname)));

// Serve index.html as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.use(express.static(path.join(__dirname, "/images")));


// Set up the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});