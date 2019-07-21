const express = require('express');
const app = express();
var path = require('path');

const hostname = 'localhost';
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});