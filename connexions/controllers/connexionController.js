const mongoose = require('mongoose');
const User = mongoose.model('User');
const Connexion = mongoose.model('Connexion');
const promisify = require('es6-promisify');

exports.getConnexions = (req, res) => {
  // const connexions = await Connexion.find();
  res.render('connexions', { title: 'Connexions'});
}

exports.addConnexion = (req, res) => {
  req.body.author = req.user._id;
  console.log(req.body);
  console.log(req.params);
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
