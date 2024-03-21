require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 4000; // Adjusted port definition

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Home
app.get('/', (req, res) => {

    const locals = {
        title: 'Nodejs',
        description: 'Free Nodejs User Management System'
    }

    res.render('index', locals);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
