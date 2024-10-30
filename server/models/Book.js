const mongoose = require(`mongoose`);

const BookSchema = new mongoose.Schema({
    BookName:{type:String, required:true},
    type:{type:String,required:true},
    author:{type:String,required:true},
    language:{type:String,required:true},
    summary:{type:String,required:true},
    genre:{type:String,required:true},
});

const Book = mongoose.model('Book',BookSchema);
module.exports = Book;