const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const chapterSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  connexion: {
    type: mongoose.Schema.ObjectId,
    ref: 'Connexion',
    required: 'Must be associated with a connexion!'
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: "Must be a signed in user"
  }
});


module.exports = mongoose.model('Chapter', chapterSchema);
