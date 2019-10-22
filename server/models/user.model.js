const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
})

module.exports = model('users', userSchema)