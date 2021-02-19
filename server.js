var express = require("express");
var mongoose = require("mongoose");
const Board = require("./user");

// app config
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
//app.use(express.urlencoded());

// db config
const connection_url = `mongodb+srv://kakao-admin:adimw43gAsOtlypR@cluster0.uqehj.mongodb.net/kakaotalk-backend?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/message/get", (req, res) => {
  Board.find((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/message/post", (req, res) => {
  const dbMessage = req.body;

  Board.create(dbMessage, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// kakao-admin
// adimw43gAsOtlypR
