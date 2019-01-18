const mongoose = require('mongoose')
const Schema = mongoose.Schema



const BookSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    creator: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    cover: {
        type: String,
    },
    file: {
        type: String,
    }
}, { timestamps: true });

const Book = mongoose.model('Book', BookSchema)
module.exports = Book


