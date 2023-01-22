const path = require('path');
const express = require('express');
const {Questions, Users} = require('./db')
const Dev = require('../ds');

const port = 4000;
const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

// Middleware - every request runs thru this middleware

app.use(express.json()); // Parse the request body
app.use(express.urlencoded({ extended: true })); // Parses url
app.use(express.static(distPath)); // Statically serve up client directory
app.use(Dev()); // Dev middleware - do not move

app.get('/api/users', (req, res) => {
});

app.post('/api/users', (req, res) => {
  const {body} = req;
  Users.create(body)
    .then(data => {
      console.log(data)
      res.status(201).json(data)
    })
    .catch(() => res.sendStatus(500))
})

/** Place all code above here */
app.listen(port, () => {
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});