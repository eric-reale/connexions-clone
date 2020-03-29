const mongoose = require('mongoose');
const User = mongoose.model('User');
const Connexion = mongoose.model('Connexion');
const Chapter = mongoose.model('Chapter');
const promisify = require('es6-promisify');

exports.getConnexions = async (req, res) => {
  // console.log(req)
  if (!req.user._id) {
     res.redirect(`/login`);
   }

  const connexions = await Connexion.find({author: req.user._id}).sort({ created: 'desc' });
  res.render('connexions', { title: 'Connexions', connexions});
  // }
  // res.redirect(`/login`);
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

const confirmOwner = (connexion, user) => {
  if (!connexion.author.equals(user._id)) {
    throw Error('Not your connexion!');
  }
};

exports.viewConnexion = async (req, res) => {
  const connexion = await Connexion.findById(req.params.id)
  const chapters = await Chapter.find({connexion: connexion._id})
  confirmOwner(connexion, req.user);
  res.render('connexion-single', { title: `My connexion`, connexion, chapters });
};

exports.editConnexion = async (req, res) => {
  const connexion = await Connexion.findOne({_id: req.params.id });
  confirmOwner(connexion, req.user);
  res.render('connexion-edit', { title: `Update my connexion`, connexion });
};

exports.updateConnexion = async (req, res) => {
  console.log(req.body)
  const connexion = await Connexion.findOneAndUpdate({_id: req.params.id }, req.body, {
    returnNewDocument: true,
    new: true,
    runValidators: true,
    strict: false
  }).exec();
  res.redirect(`/connexions/${connexion._id}/`);
  // res.render('connexion-edit', { title: `Update my connexion`, connexion });
}

exports.updateConnexionCircles = async (req, res) => {
  // console.log(req.body);
  const connexion = await Connexion.findOneAndUpdate({_id: req.body.id },
    { $unset: {circles: req.body.circle }});
  // res.redirect(`/connexions/`);
}

exports.deleteConnexion = async (req, res) => {
  const connexion = await Connexion.findOne({_id: req.params.id });
  connexion.remove();
  res.redirect(`/connexions/`);
}

exports.newCircle = async (req, res) => {
  const user = await User.findById(req.user._id);
  const connexionPromise = Connexion.findOne({_id: req.params.id });
  const circlesPromise = Connexion.getCircleCount(user);
  let [circles, connexion] = await Promise.all([circlesPromise, connexionPromise])
  // confirmOwner(connexion, req.user);
  res.render('circle-new', { title: `Add to my Circles`, connexion, circles });
}

exports.editCircle = async (req, res) => {
  const circleQuery = req.params.circle;
  const connexions = await Connexion.find({ circles: circleQuery, author: req.user._id });
  res.render('circle-edit', { title: `${circleQuery}`, connexions, circleQuery });
}

exports.deleteCircle = async (req, res) => {
  const circle = req.params.circle
  const connexions = await Connexion.updateMany({ circles: req.params.circle, author: req.user._id },
    { $pull: {circles: circle }});
  res.redirect(`/connexions/`);
}

exports.addCircleToConnexion = async (req, res) => {
  const connexion = await Connexion.findOneAndUpdate({_id: req.params.id },
    { $addToSet: req.body }, {
    new: true,
    runValidators: true,
    strict: false
  }).exec();
  res.redirect(`/connexions/${connexion._id}`);
}

exports.displayCircle = async (req, res) => {
  const circleQuery = req.params.circle;
  const connexions = await Connexion.find({ circles: circleQuery, author: req.user._id });
  res.render('circle-single', { title: `${circleQuery}`, connexions, circleQuery });
}

exports.allCircles = async (req, res) => {
  const user = await User.findById(req.user._id);
  const circlesPromise = Connexion.getCircleCount(user);
  let [circles] = await Promise.all([circlesPromise])
  // console.log(circles)
  res.render('circles', { title: `My Circles`, circles, user });
}
