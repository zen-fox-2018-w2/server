const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { encrypt } = require('../helpers/encrypts')


const UserSchema = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});
UserSchema.pre('save', function () {
    this.password = encrypt(this.password)
    next()
})
const User = mongoose.model('User', UserSchema)
module.exports = User


