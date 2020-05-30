require('dotenv').config()

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    res.send('<h1>App Start!<h1>');
})

app.listen(3000);