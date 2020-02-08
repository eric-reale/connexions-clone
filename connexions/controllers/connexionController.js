const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.getConnexions = (req, res) => {
  // const connexions = await Connexion.find();
  res.render('connexions', { title: 'Connexions'});
}

exports.addConnexion = (req, res) => {
  res.render('connexion-single', { title: ''})
}
