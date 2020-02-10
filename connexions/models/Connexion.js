const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const connexionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a connexion's name!"
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'A user must be associated with this connexion!'
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Connexion', connexionSchema);
