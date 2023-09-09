/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');

const path = require('path');

const app = express();

const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// console.log(__dirname);

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.listen(3000, () => {
    console.log('Server started at 3000');
});
