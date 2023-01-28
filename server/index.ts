import path from 'path'
import express, {Request, Response} from 'express'
const Dev = require('../ds');

const port = 4000;
const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

// Middleware - every request runs thru this middleware

app.use(express.json()); // Parse the request body
app.use(express.urlencoded({ extended: true })); // Parses url
app.use(express.static(distPath)); // Statically serve up client directory
app.use(Dev()); // Dev middleware - do not move

/** Place all code above here */
app.listen(port, () => {
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});