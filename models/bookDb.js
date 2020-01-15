const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TweetSchema = new Schema ({

	bookTitle: String,
	bookAuthor: String,
	bookSubject: String,
	bookYear: String,
	bookLink: String,
	bookCatalogue: String,

    createdDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('bookdatabase', TweetSchema);