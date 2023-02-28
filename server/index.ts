import path from "path";
import express, { Request, Response } from "express";
const Dev = require("../ds");
const { User } = require("./db");

const port = 8080;
const distPath = path.resolve(__dirname, "..", "dist");

const app = express();

// Middleware - every request runs thru this middleware

app.use(express.json()); // Parse the request body
app.use(express.urlencoded({ extended: true })); // Parses url
app.use(express.static(distPath)); // Statically serve up client directory
app.use(Dev()); // Dev middleware - do not move

app.get("/api/user", (req: Request, res: Response) => {
  User.findOne()
    .then((data: any) => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch(() => res.sendStatus(500));
});

app.post("/api/user", (req: Request, res: Response) => {
  const { body } = req;
  User.create(body)
    .then((data: any) => {
      // console.log(data);
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(500));
});

app.put("/api/user/:id", (req: Request, res: Response) => {
  const {
    params: { id },
    body: { _id, name, score },
  } = req;
  console.log(id, _id, name, score);
  User.updateOne({ id: _id }, { name, score })
    .then((data: any) => {
      console.log(data);
      if (data.modifiedCount) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(() => res.sendStatus(500));
});
/** Place all code above here */
app.listen(port, () => {
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});
