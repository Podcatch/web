const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
    username: String,
    password: String
})

UserSchema.methods.validPassword = function(pwd) {
  return bcrypt.compareSync(pwd, this.password)
}

let UserModel = mongoose.model('UserModel', UserSchema)

module.exports.UserSchema = UserSchema
module.exports.UserModel = UserModel
