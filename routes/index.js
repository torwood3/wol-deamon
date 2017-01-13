var express = require('express');
var pkg = require('../package.json');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Wol Daemon', app: { version : pkg.version } });
});

module.exports = router;
