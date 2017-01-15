var express = require('express');
var os = require('os');

var router = express.Router();
var powerOff = require('power-off');

/* GET */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* Get poweroff */
router.get('/poweroff', function(req, res){
	powerOff( function (err, stderr, stdout) {
		if(!err && !stderr) {
			console.log(stdout);
		}
	});
	res.end();
});

/* GET os uptime */
router.get('/uptime', function(req, res) {
	res.send(os.uptime().toString());
});

module.exports = router;
