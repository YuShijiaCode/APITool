let express = require('express');
let path = require('path');
const httpRequest = require('../framework/httpRequest');
let router = express.Router();


/* GET users listing. */
router.get('/index', function(req,res) {
  res.sendFile("res.sendFile(path.join(__dirname , '/../public/javascripts/index.html'));");
  //console.log('./public/javascripts/index.html');
});

router.get('/returnRes', function(req, res, next) {
  let response  = {
    'firstname': req.query.firstname,
    'lastname': req.query.lastname
  }
  console.log('---------------------------------------------------------------------');
  console.log(response);
  res.send(JSON.stringify(response));
});

module.exports = router;
