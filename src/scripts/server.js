const path = require('path')
const bodyParser = require('body-parser')

// Create users database in CouchDB on initialization
const PouchDB = require('pouchdb')
      PouchDB.plugin(require('pouchdb-authentication'))
// Start application
const express = require('express')
const app = express()

// Hashing
let bcrypt = require('bcryptjs')

// Initialize local and remote database
let users = new PouchDB('http://localhost:5984/users', {
        skipSetup: true
    }),
    remote = "https://podcatch:billnyethescienceguy@podcatch.cloudant.com/users",
    opts = {
        continuous: true
    }

// Configuration
let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
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
    res.render('index')
})

app.post('/login', urlencodedParser, function(req, res) {
    username = req.body.username,
    password = req.body.password
    console.log(username)
    res.end()
})

// Registration
function registration(username, password) {
    // Hash and salt password
    let salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(password, salt)
    console.log("The hashed password is: " + hash)

    // Add user to the database
    users.put({
        _id: username,
        pass: hash
    })
    console.log(username, hash)
}

//registration('Bradzilla', 'MegamanDorkBoi')
// console.log(bcrypt.compareSync(password, doc.pass))

// Sync both database changes from PouchDB to Cloudant and vice versa
users.replicate.to(remote, opts)
users.replicate.from(remote, opts)
