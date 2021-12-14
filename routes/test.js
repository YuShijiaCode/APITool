var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/index.html', function(req,res) {
  res.sendFile("C:\\Users\\yushijia\\IdeaProjects\\APITool\\public\\javascripts\\index.html");
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
