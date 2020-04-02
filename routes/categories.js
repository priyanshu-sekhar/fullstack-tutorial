var express = require('express');
var router = express.Router();

var categories = [];

router.get('/', function(req, res, next) {
  res.send(categories);
});

router.post('/', (req, res) => {
  const {category} = req.body
  categories.push(category);
  res.send(categories);
});

router.delete('/', (req, res) => {
  const {category} = req.body;
  categories = categories.filter(each => each !== category);
  res.send(categories);
});

module.exports = router;
