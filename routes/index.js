var express = require('express');
var router = express.Router();
let books = require('../models/bookDb');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const getText = req.body.defaultLoginFormEmail;

  // books.find({ $text : {$search : getText}}, {score : {$meta: "textScore"}}, function(err, docs){
      // if (err) return err;

      res.redirect('/get-search/'+getText);

  // }).sort({score : {$meta: "textScore"}});

});

router.get('/get-search/:name', function(req, res) {
  const getText = req.params.name;
  books.find({ $text : {$search : getText}}, {score : {$meta: "textScore"}}, function(err, docs){
    if (err) return err;
        res.render('getInfo', {docs: docs});
    }).sort({score : {$meta: "textScore"}});
});

module.exports = router;
