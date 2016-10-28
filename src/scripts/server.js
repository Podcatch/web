// Script intialized by Gulp
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Import registration and login functionality from database.js
const database = require('./database')

// Configuration
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(path.join(__dirname, '../../docs')))
app.use(express.static(path.join(__dirname, '../../src')))

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'pug')
app.set('views', 'src/pages')

app.listen(app.get('port'))
console.log('Listening on port: ' + app.get('port'))

// Routing
app.get('/', function(req, res) {
    console.log('Welcome!')
    res.render('index');
})

app.get('/login', function(req, res) {
    console.log('Uhh, it looks like something went wrong here')
    res.end()
})

// Link with database.js to link username and password attributes
app.post('/login', urlencodedParser, function(req, res) {
    console.log(req.body)
    //database.login('ThisIsATestAccountBoi', 'TestPassword')
    //console.log('Username: ' + username + '\n' + 'Password: ' + password)
    res.end()
})
