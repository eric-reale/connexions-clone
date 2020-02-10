const mongoose = require('mongoose');
const User = mongoose.model('User');
const Connexion = mongoose.model('Connexion');
const promisify = require('es6-promisify');

exports.getConnexions = async (req, res) => {
  // console.log(req.user._id);
  const connexions = await Connexion.find({author: req.user._id}).sort({ created: 'desc' });
  // console.log(connexions);
  res.render('connexions', { title: 'Connexions', connexions});
}

// exports.sortConnexions = async (req, res) => {
//   //
// }

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
  confirmOwner(connexion, req.user);
  res.render('connexion-single', { title: `My connexion`, connexion });
}

const confirmOwner = (connexion, user) => {
  if (!connexion.author.equals(user._id)) {
    throw Error('Not your connexion!');
  }
};

exports.editConnexion = async (req, res) => {
  const connexion = await Connexion.findOne({_id: req.params.id });
  // console.log(connexion);
  confirmOwner(connexion, req.user);
  res.render('connexion-edit', { title: `Update my connexion`, connexion });
}

exports.updateConnexion = async (req, res) => {
  // console.log(req.body)
  const connexion = await Connexion.findOneAndUpdate({_id: req.params.id }, req.body, {
    new: true,
    runValidators: true
  }).exec();
  // console.log(connexion);
  // console.log('here');
  res.render('connexion-edit', { title: `Update my connexion`, connexion });
}
