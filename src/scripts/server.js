// Script intialized by Gulp
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Import registration and login functionality from database.js
const database = require('./database')

console.log(database.login('ThisIsATestAccountBoi', 'TestPassword'))

// Configuration
app.use(express.static(path.join(__dirname, '../../docs')))
app.use(express.static(path.join(__dirname, '../../src')))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'pug')
app.set('views', 'src/pages')

app.get('/', function(req, res) {
    console.log('Welcome!')
    res.render('index');
})

app.get('/login', function(req, res) {
    console.log('Uhh, it looks like something went wrong here')
    res.end()
})

// Get POST data from login and use encodeURIComponent on password with POST URL
// Link with database.js to link username and password attributes
app.post('/login', function(req, res) {
    console.log('Logging in...')
    username = req.body.username,
    password = req.body.password,
    console.log('Username: ' + username + '\n' + 'Password: ' + password)
    res.end()
})

app.listen(app.get('port'))
console.log('Listening on port: ' + app.get('port'))
