const mongoose = require('mongoose');
const User = mongoose.model('User');
const Connexion = mongoose.model('Connexion');
const Chapter = mongoose.model('Chapter');
const promisify = require('es6-promisify');

exports.newChapter = async (req, res) => {
  // console.log(req.params)
  const connexion = await Connexion.findById(req.params.id)
  res.render('chapter-new', { title: 'New chapter', connexion });
};

exports.addChapter = async (req, res) => {
  const connexion = await Connexion.findById(req.params.id)

  const newChapter = new Chapter({
    author: connexion.author,
    connexion: connexion.id,
    name: req.body.name,
    location: req.body.location,
    description: req.body.description
  })
  newChapter.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({message: err})
    });
};


