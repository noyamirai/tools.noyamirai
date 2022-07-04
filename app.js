/* eslint-disable no-undef */
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const session = require('express-session');

// const db = require('./config/db');

// SET TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/public', express.static('public'));
app.use('/public', express.static(__dirname + '/public/'));

app.use(session({
    secret: 'activibessupersecretsessionkeymadeandcreatedbyurstruly220621',
    resave: false,
    saveUninitialized: true,
}));

// db.startConnection();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// MIDDLEWARE
// app.use('/', authenticator.checkLoggedSession);

// ROUTES
app.use('/', require('./routes/dashboard'));

app.get('*', (req, res) => {
    res.redirect('/notice?type=1');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});