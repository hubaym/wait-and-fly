var express = require('express');
var router = express.Router();

var results = [
  {
    "dept_city": "Pasadena",
    "dept_country": "United States",
    "arr_city": "Leśna Podlaska",
    "arr_country": "Poland",
    "text": "vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam"
  },
  {
    "dept_city": "Pasadena",
    "dept_country": "United States",
    "arr_city": "Leśna Podlaska",
    "arr_country": "Poland",
    "text": "vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam"
  },
  {
    "dept_city": "Pasadena",
    "dept_country": "United States",
    "arr_city": "Leśna Podlaska",
    "arr_country": "Poland",
    "text": "vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam"
  },
  {
    "dept_city": "Pasadena",
    "dept_country": "United States",
    "arr_city": "Leśna Podlaska",
    "arr_country": "Poland",
    "text": "vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/results', function(req, res, next) {
  console.log(req.query['departure']);
  console.log(req.query['arrival']);
  // mongo query here by these values
  res.render('results', { results: results });
});

module.exports = router;
