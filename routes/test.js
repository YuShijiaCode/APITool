let express = require('express');
let path = require('path');
const httpRequest = require('../framework/httpRequest');
const connectMysql = require('../framework/connectMysql');
let router = express.Router();


/* GET users listing. */
router.get('/index', function(req,res) {
  // res.sendFile("C:\\Users\\yushijia\\IdeaProjects\\APITool\\public\\javascripts\\index.html");
  res.sendFile(path.join(__dirname,'/../public/javascripts/Login.html'));
  // console.log('public/javascripts/index.html');
});

router.get('/returnRes', function(req, res, next) {
  let response  = {
    'username': req.query.username,
    'password': req.query.password
  }
  connectMysql.select_Login_User_Info("",(results)=>{
    if (results[0].username  == req.query.username){
      res.send(results)
    }else{
      res.send("这个用户不存在")
    }
  });
});

module.exports = router;


