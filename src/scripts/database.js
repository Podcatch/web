// Create users database in CouchDB on initialization
let PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-authentication'))

// Hashing
let bcrypt = require('bcryptjs')

console.log('Bush Did 9/11')

// Initialize local and remote database
let users = new PouchDB('http://localhost:5984/users', {
        skipSetup: true
    }),
    // Connect to remote DB
    remote = "https://podcatch:billnyethescienceguy@podcatch.cloudant.com/users",
    opts = {
        continuous: true
    }

let username,
    password,
    email

// Registration
function registration(username, password, email) {
    users.signup(username, password, {
        metadata: {
            email: email
        }
    }, function(err, response) {
        // Hash and salt password
        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt)
        console.log("The hashed password is: " + hash)

        // Add user to the database
        users.put({
            _id: username,
            emailAddress: email,
            pass: hash
        })

        console.log(username, hash, email)
    })
}

// Login
function login(username, password) {
    // Use db.get() to get hashed password from database and compare with entered value
    users.get(username, function(err, doc) {
        if (err) {
            return console.log(err);
            console.log('You have entered an invalid username or password')
        }
        console.log(bcrypt.compareSync(password, doc.pass))
    })
}

// Sync both database changes from PouchDB to Cloudant and vice versa
users.replicate.to(remote, opts);
users.replicate.from(remote, opts);
