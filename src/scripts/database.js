// // Create users database in CouchDB on initialization
console.log('database.js has been replaced')
// let PouchDB = require('pouchdb')
//     PouchDB.plugin(require('pouchdb-authentication'))
//
//     // Hashing
//     let bcrypt = require('bcryptjs')
//
//         // Initialize local and remote database
//         let users = new PouchDB('http://localhost:5984/users', {skipSetup: true}),
//             // Connect to remote DB
//             remote = "https://podcatch:billnyethescienceguy@podcatch.cloudant.com/users",
//             opts = {
//                 continuous: true
//             }
//
//         let username,
//             password
//
//         // Registration
//         function registration(username, password) {
//             users.signup(username, password, function(err, response) {
//                 // Hash and salt password
//                 let salt = bcrypt.genSaltSync(10),
//                     hash = bcrypt.hashSync(password, salt)
//                 console.log("The hashed password is: " + hash)
//
//                 // Add user to the database
//                 users.put({_id: username, pass: hash})
//
//                 console.log(username, hash)
//             })
//         }
//
//         // Login
//         function login(username, password) {
//             users.login(username, password, function(err, response) {
//                 if (err) {
//                     if (err.name === 'unauthorized') {
//                         // name or password incorrect
//                         console.log('Username or password is incorrect')
//                     } else {
//                         console.log('A meteor has struck your computer')
//                     }
//                 }
//             })
//             //console.log(bcrypt.compareSync(password, doc.pass))
//         }
//
//         exports.registration = registration
//         exports.login = login
//
//         // Sync both database changes from PouchDB to Cloudant and vice versa
//         users.replicate.to(remote, opts);
//         users.replicate.from(remote, opts);
