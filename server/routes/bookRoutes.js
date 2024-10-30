const express = require(`express`);
const router = express.Router();
const {
    getBookById,
    getAllBook
} = require('../controllers/bookController');

//find book  all id
router.get('/all', getAllBook); // GET /api/books/all -> ดึงข้อมูลbook ทั้งหมด

//find book by id
router.get('/:id',getBookById); // GET /api/users/:id -> ดึงข้อมูลbookตาม ID


module.exports = router;