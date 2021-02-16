var express = require("express");
var mongoose = require("mongoose");
// import express from "express";
// import mongoose from "mongoose";
//import Board from "./user";
const Board = require("./user");

// app config
const app = express();
const port = process.env.PORT || 8000;

// middleware

// db config
const connection_url = `mongodb+srv://kakao-admin:adimw43gAsOtlypR@cluster0.uqehj.mongodb.net/kakaotalk-backend?retryWrites=true&w=majority`;

mongoose.connect(connection_url, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("mongodb connect success");
});

// api routes

app.post("/insert", (req, res) => {
  const dbMessage = req.body;

  Board.create(dbMessage, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// kakao-admin
// adimw43gAsOtlypR
