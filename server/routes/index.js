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

/* GET read page. */
/*router.get('/asset-list', function(req, res, next) {
  res.render('asset-list', { title: 'List Assets' });
});*/

/* GET create page. */
router.get('/addition', function(req, res, next) {
  res.render('addition', { title: 'Asset Addition' });
});

/* GET update page. */
router.get('/update', function(req, res, next) {
  res.render('update', { title: 'Update Asset' });
});

/* GET remove page. */
router.get('/retirement', function(req, res, next) {
  res.render('retirement', { title: 'Asset Retirement' });
});

module.exports = router; //Make it public
