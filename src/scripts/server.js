// Initialize
"use strict";
const firebase = require('firebase')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

// Configuration
const config = {
  apiKey: "AIzaSyC7COuJa0Ti80hKXgFSy4ZnKh893WpooXc",
  authDomain: "podcatch-4ec51.firebaseapp.com",
  databaseURL: "https://podcatch-4ec51.firebaseio.com",
  storageBucket: "podcatch-4ec51.appspot.com",
  messagingSenderId: "890718527886"
}

let podcatch = firebase.initializeApp(config),
    podcatchDatabase = podcatch.database()

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, '../../docs')))
app.use(express.static(path.join(__dirname, '../../src')))

app.set('port', process.env.PORT || 8080)

app.listen(app.get('port'))
console.log('Listening on port: ' + app.get('port'))

// Routing
app.get('/', function(req, res) {
    //res.render('index.html')
    res.sendFile(path.join(__dirname + '/../pages/index.html'))
})

// Registration
app.post('/signup', urlencodedParser, function(req, res) {
  firebase.auth().createUserWithEmailAndPassword(req.body.username, req.body.password).catch(function(error) {
    let errorCode = error.code,
        errorMessage = error.message
  })
})

// Login
app.post('/login', urlencodedParser, function(req, res) {
  firebase.auth().signInWithEmailAndPassword(req.body.username, req.body.password).catch(function(error) {
    let errorCode = error.code,
        errorMessage = error.message
  })
})

// Log out
app.post('/logout', function(req, res) {
  firebase.auth().signOut().then(function() {
    // Logged out successfully
    console.log('You have been logged out successfully!')
  }, function(error) {
    console.log('You somehow failed to log out. Good job!')
  })
})
