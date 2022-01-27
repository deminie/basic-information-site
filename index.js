const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

// if the user wants to access the homepage.
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// if the user wants to access the about page.
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/pages/about.html'));
});

// if the user wants to access the contact-me page.
app.get('/contact-me', function(req, res) {
    res.sendFile(path.join(__dirname, '/pages/contact-me.html'));
});

// start the server listen at the provided port.
app.listen(port, function() {
    console.log(`Server running at port ${port}`);
});