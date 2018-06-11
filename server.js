const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users')

const app = express();

// Config base de données
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('Connecté à mongo'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req,res) => res.send('Salut'));
app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`écoute sur le port ${port}`));