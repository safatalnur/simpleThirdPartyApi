var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //get the info from input section of the index.ejs file
  const user = req.query;
  console.log(user)
  //look at the console.log and you will be what info has been sent out from input selection and use them
  const username = req.query.username
  console.log(`Username is:>>>>>>>>> ${username}`)
  res.render('index', { title: 'GitHub Users' });
});

module.exports = router;
