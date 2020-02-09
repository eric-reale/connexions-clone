const mongoose = require('mongoose');
const User = mongoose.model('User');
const Connexion = mongoose.model('Connexion');
const promisify = require('es6-promisify');

exports.getConnexions = async (req, res) => {
  const connexions = await Connexion.find();
  // console.log(connexions);
  res.render('connexions', { title: 'Connexions', connexions});
}

exports.addConnexion = (req, res) => {
  req.body.author = req.user._id;
  // console.log(req.body);
  const newConnexion = new Connexion({
    name: req.body.name,
    author: req.body.author
  })
  newConnexion.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({message: err})
    });
  // res.render('connexion-single', { title: ''})
}

exports.viewConnexion = async (req, res) => {
  const connexion = await Connexion.findById(req.params.id)
  // console.log(connexion);
  // console.log('here');
  res.render('connexion-single', { title: `My connexion`, connexion });
}
