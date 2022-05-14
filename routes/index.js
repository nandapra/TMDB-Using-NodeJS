var express = require('express');
var router = express.Router();
const JWT = require("jsonwebtoken")

//generate jwt token
const user = {
  nama: "Pratama",
  pass: "Nanda"
}
const token = JWT.sign({user}, process.env.SECRET_KEY, {expiresIn: '1h'})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(token);
});

module.exports = router;
