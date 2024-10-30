const express = require('express');
const router = express.Router();
const {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserAll
} = require('../controllers/userController');

// Route สำหรับดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/all', getUserAll);               // GET /api/users/all -> ดึงข้อมูลผู้ใช้ทั้งหมด

// Route อื่นๆ สำหรับจัดการข้อมูลผู้ใช้
router.post('/', createUser);                 // POST /api/users -> สร้างผู้ใช้ใหม่
router.get('/:id', getUserById);              // GET /api/users/:id -> ดึงข้อมูลผู้ใช้ตาม ID
router.put('/:id', updateUser);               // PUT /api/users/:id -> แก้ไขข้อมูลผู้ใช้
router.delete('/:id', deleteUser);            // DELETE /api/users/:id -> ลบข้อมูลผู้ใช้

module.exports = router;
