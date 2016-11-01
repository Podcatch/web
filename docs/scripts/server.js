const path = require('path')
const bodyParser = require('body-parser')

// Create _users database in CouchDB on initialization
const PouchDB = require('pouchdb')
      PouchDB.plugin(require('pouchdb-authentication'))

// Start application
const express = require('express')
const app = express()

// Initialize local and remote database
let _users = new PouchDB('http://localhost:5984/_users/', {
        skipSetup: true
    }),
    remote = "https://podcatch:billnyethescienceguy@podcatch.cloudant.com/_users",
    opts = {
        continuous: true
    }

// Configuration
let urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.use(express.static('docs'))
app.use(express.static('src'))

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'pug')
app.set('views', 'src/pages')

app.listen(app.get('port'))
console.log('Listening on port: ' + app.get('port'))

// Routing
app.get('/', function(req, res) {
    console.log('Welcome!')
    res.render('index')
})

app.post('/login', urlencodedParser, function(req, res) {
   username = req.body.username,
   password = req.body.password

   _users.login(username, password, function (err, response) {
     if (err) {
       console.log(err)
       if (err.name === 'unauthorized') {
         // name or password incorrect
         console.log('Incorrect username or password')
       } else {
         // cosmic rays, a meteor, etc.
         console.log('Hurry up and fix this')
       }
     }
   })

    res.end()
})

// Registration
function registration(username, password) {
  _users.signup(username, password, function (err, response) {
    if (err) {
      if (err.name === 'conflict') {
        console.log('Username already exists boi')
      } else if (err.name === 'forbidden') {
        // invalid username
        console.log('Please do not make that your username')
      } else {
        console.log('Your computer has been struck by a meteor')
      }
    }
  })
}

//registration('Bradzilla', 'Megaman')

// Sync both database changes from PouchDB to Cloudant and vice versa
_users.replicate.to(remote, opts)
_users.replicate.from(remote, opts)
