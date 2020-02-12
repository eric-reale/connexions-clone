const mongoose = require('mongoose');
const User = mongoose.model('User');
const Connexion = mongoose.model('Connexion');
const Chapter = mongoose.model('Chapter');
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

const confirmOwner = (connexion, user) => {
  if (!connexion.author.equals(user._id)) {
    throw Error('Not your connexion!');
  }
};

exports.viewConnexion = async (req, res) => {
  const connexion = await Connexion.findById(req.params.id)
  // console.log(connexion);
  // console.log('here');
  confirmOwner(connexion, req.user);
  res.render('connexion-single', { title: `My connexion`, connexion });
};

exports.editConnexion = async (req, res) => {
  const connexion = await Connexion.findOne({_id: req.params.id });
  // console.log(connexion);
  confirmOwner(connexion, req.user);
  res.render('connexion-edit', { title: `Update my connexion`, connexion });
};

exports.updateConnexion = async (req, res) => {
  // console.log(req.body)
  const connexion = await Connexion.findOneAndUpdate({_id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    strict: false
  }).exec();
  // console.log(connexion);
  // console.log('here');
  res.redirect(`/connexions/${connexion._id}/edit`);
  // res.render('connexion-edit', { title: `Update my connexion`, connexion });
}

exports.newCircle = async (req, res) => {
  const connexion = await Connexion.findOne({_id: req.params.id });
  confirmOwner(connexion, req.user);
  res.render('circle-new', { title: `Add to my Cirlces`, connexion });
}

exports.addCircleToConnexion = async (req, res) => {
  const connexion = await Connexion.findOneAndUpdate({_id: req.params.id },
    { $addToSet: req.body }, {
    new: true,
    runValidators: true,
    strict: false
  }).exec();
  res.redirect(`/connexions/${connexion._id}/circles/new`);
}

exports.displayCircle = async (req, res) => {
  // console.log(req.params);
  const circleQuery = req.params.circle;
  const connexions = await Connexion.find({ circles: circleQuery });
  // console.log(connexions)
  res.render('circle-single', { title: `${circleQuery}`, connexions });
}

// exports.accessConnexionForCircles = async (req, res, next) => {
//   // const user = await User.findById(req.user._id)
//   // const connexion = await Connexion.find({ author: user.id }).limit(1)
//   next();
// }

// exports.getCirclesByConnexion = async (req, res, next) => {

// }

exports.allCircles = async (req, res) => {
  const user = await User.findById(req.user._id)
  const connexionPromise = Connexion.find({ author: user.id }).limit(1)
  const circlesPromise = Connexion.getCircleCount();

  const [connexion, circles] = await Promise.all([connexionPromise, circlesPromise])
  // const connexion = await Connexion.findOne({_id: req.params.id });
  res.render('circles', { title: `My Circles`, circles, user, connexion });
}
