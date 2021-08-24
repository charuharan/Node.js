var express = require('express')
var router = express.Router()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
  res.send('hello world')
})
router.get('/user',function(req,res){
    res.send('Hello user')
})
module.exports = router