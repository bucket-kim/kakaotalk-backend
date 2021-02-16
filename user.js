var mongoose = require("mongoose");
// import mongoose from "mongoose";

const kakaoSchema = mongoose.Schema({
  name: String,
  message: String,
  dateStamp: String,
});

// export default mongoose.model("kakaoChat", kakaoSchema);
module.exports = mongoose.model("myboard", kakaoSchema);
