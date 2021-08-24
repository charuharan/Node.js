const express = require('express')
const app = express()
var fs = require('fs') // this engine requires the fs module
app.engine('ntl', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    // this is an extremely simple template engine
    var rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
    return callback(null, rendered)
  })
})
app.set('myapp1', './myapp1') // specify the myapp1 directory
app.set('myapp1 engine', 'ntl') // register the template engine
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })
app.listen(3000)