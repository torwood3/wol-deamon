var express = require('express');
var router = express.Router();
var fs = require('fs');
var os = require('os');
var powerOff = require('power-off');

/* GET */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* Get poweroff */
router.get('/poweroff', function(req, res){
  var file = './wol-deamon.lock';
  fs.writeFile(file, (new Date().getTime()).toString(), (err) => {
    if (err) throw err;
    powerOff( function (err, stderr, stdout) {
      if(!err && !stderr) {
        console.log(stdout);
      }
    });
    res.end();
  });
});

/* GET os uptime */
router.get('/uptime', function(req, res) {
	res.send(os.uptime().toString());
});

module.exports = router;
