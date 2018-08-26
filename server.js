const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();

//BodyParser
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// Config base de données
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('Connecté à mongo'))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);
// Routes

app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`écoute sur le port ${port}`));