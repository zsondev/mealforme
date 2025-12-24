'use strict'

require('dotenv').config();

const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!');
    console.log("Hello");
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, (err) => {
    if (err) throw new Error('Oops! Looks like something went wrong...');
    console.log('Server started on port ' + PORT);
});
