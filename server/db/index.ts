const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const mongoUri = 'mongodb://localhost/friends';

// Create a mongoose connection to out mongo database
mongoose.connect(mongoUri);

const UsersSchema = new Schema(
  {
    name: String,
    score: Number 
  }
)

module.exports = {
  Users: model('Users', UsersSchema)
};