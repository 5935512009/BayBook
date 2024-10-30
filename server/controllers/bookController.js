const Book = require('../models/Book');

// ดึงข้อมูลหนังสือตาม ID
const getBookById = async (req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
        if(!Book) return res.status(404).json({message:'Book not found'});
        res.json(book);
    }catch(err){
        res.status(400).json({message:'Error fetching Book',err});
    }
};

// ดึงข้อมูลหนังสือทั้งหมด
const getAllBook =async(req,res)=>{
    try{
        const books = await Book.find();
        res.json(books);
    }catch(err){
        res.status(400).json({message:'Error fetching all Books',err});
    }
}

module.exports ={
    getBookById,
    getAllBook
}