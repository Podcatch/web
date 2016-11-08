// Initialize
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const path = require('path')
const bcrypt = require('bcryptjs')

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                })
            }
            return done(null, user)
        });
    }
));

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

// Initialize database (local or remote?)
const MongoClient = require('mongodb').MongoClient,
      mongoose = require('mongoose'),
      assert = require('assert')

const database = 'mongodb://localhost:27017/database'
mongoose.connect(database)

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function() {
  let userData = require('./models/user.js')
  let testUser = new userData.UserModel({ username: 'Hillary better win', password: 'HarambeWasAnInsideJob' })
  console.log(testUser.username)
})

// Routing
app.get('/', function(req, res) {
    console.log('Welcome!')
    res.render('index')
})

// Registration
app.post('/signup', urlencodedParser, function(req, res) {
    let username = req.body.username,
        password = req.body.password,
        salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(password, salt)

    let user = new UserModel({
        username: username,
        password: hash
    })

    console.log(user.username)
    console.log(user.password)

    user.save(function(err) {
        if (err) {
            return console.log(err, user)
        } else {
            console.log('User has been saved to the database successfully')
        }
    })

    res.end()
})

// Login
app.post('/login', passport.authenticate('local', { successRedirect: '/success',
        failureRedirect: '/fail' }), function(req, res) {
        res.end()
})
