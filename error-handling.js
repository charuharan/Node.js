const express = require('express')
const app = express()
app.get('/', function (req, res) {
    throw new Error('BROKEN') // Express will catch this on its own.
  })
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.listen(3000)