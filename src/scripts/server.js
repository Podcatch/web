// Script intialized by Gulp
const path = require('path')
const express = require('express')
const app = express()

// Configuration
app.set('port', process.env.PORT || 8080);
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../../docs')))
app.use(express.static(path.join(__dirname, '../../src')))
app.set('view engine', 'pug')
app.set('views', 'src/pages')

app.get('/', function(req, res) {
    console.log('Welcome!')
    res.render('index');
})

// Get post data from login and use encodeURIComponent on password with POST URL
app.get('/login', function(req, res) {
    console.log('Request received')
    res.end()
})

app.post('/login', function(req, res) {
  console.log('Thanks for letting us steal your data!')
  res.end()
})

app.listen(app.get('port'))
console.log('Listening on port: ' + app.get('port'))
