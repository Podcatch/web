const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
    username: String,
    password: String
})

let UserModel = mongoose.model('UserModel', UserSchema)

module.exports.UserSchema = UserSchema
module.exports.UserModel = UserModel
