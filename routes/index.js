//Nate Coolidge - 100749708

var express = require('express');
var router = express.Router();

//CRUD --> Create, Read, Update, Delete
// Post - Get - Put - Delete


/* GET home page. */
router.get('/', function(req, res, next) { //Router is like a mini-app - the better approach than app.get
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router; //Make it public
