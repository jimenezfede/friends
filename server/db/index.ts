const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const mongoUri = 'mongodb://localhost/friends';

// Create a mongoose connection to out mongo database
mongoose.connect(mongoUri);

// Create a mongoose schema for our mongo database
// Declare the shape of the `Tasks` collection in the `Todos` database
const QuestionsSchema = new Schema(
  {
    category: String,
    question: String,
    answer: String
  }
);

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      unigue: true
    },
    score: Number 
  }
)

module.exports = {
  Questions: model('Questions', QuestionsSchema),
  Users: model('Users', UsersSchema)
};