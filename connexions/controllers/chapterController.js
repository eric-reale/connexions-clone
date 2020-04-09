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
    description: req.body.description
  })
  await newChapter.save()
    // .then(data => {
    //   res.json(data)
    // })
    // .catch(err => {
    //   res.json({message: err})
    // });
  res.redirect(`/connexions/${connexion._id}/`);
  // res.render('connexion-single', { title: `My connexion`, connexion });
};

exports.showChapter = async (req, res) => {
  // console.log(req.params)
  const chapter = await Chapter.findById(req.params.chapter_id)
  res.render('chapter-single', { title: 'Chapter', chapter});
}

exports.editChapter = async (req, res) => {
  const chapter = await Chapter.findById(req.params.chapter_id)
  res.render('chapter-edit', { title: 'Chapter', chapter});
}

exports.updateChapter = async (req, res) => {
  // console.log(req.body);
  const chapter = await Chapter.findOneAndUpdate({_id: req.params.chapter_id }, req.body, {
    new: true,
    runValidators: true,
    strict: false
  }).exec();
  res.redirect(`/connexions/${chapter.connexion}/chapter/${chapter.id}`);
}

