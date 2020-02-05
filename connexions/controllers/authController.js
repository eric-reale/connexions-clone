const passport = require('passport');
const crypto = require('crypto');
const mongoose = require('mongoose');

exports.homePage = (req, res) => {
  res.render('index');
}
