import mongoose from "mongoose";
const { Schema, model } = mongoose;

mongoose.connect("mongodb://localhost/friends");

const UserSchema = new Schema({
  id: String,
  name: String,
  score: Number,
});

module.exports = {
  User: model("User", UserSchema),
};
