import path from 'path'
import express, {Request, Response} from 'express'
const {Users} = require('./db')
const Dev = require('../ds');

const port = 4000;
const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

// Middleware - every request runs thru this middleware

app.use(express.json()); // Parse the request body
app.use(express.urlencoded({ extended: true })); // Parses url
app.use(express.static(distPath)); // Statically serve up client directory
app.use(Dev()); // Dev middleware - do not move

// get users
app.get('/api/users', (req: Request, res: Response) => {
  Users.find()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404))
})

// create user
app.post('/api/users', (req, res) => {
  const {body} = req;
  Users.create(body)
    .then((data: any) => res.status(201).json(data))
    .catch(() => res.sendStatus(500))
})

// update score
app.put('/api/users/:_id', (req, res) => {
  const {params: {_id}, body: {score}} = req
  Users.updateOne({_id}, {score})
    .then((result: any) => {
      console.log(result)
      res.sendStatus(200)
    })
    .catch(() => res.sendStatus(400))
})

/** Place all code above here */
app.listen(port, () => {
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});