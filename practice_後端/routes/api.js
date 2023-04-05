const express = require('express');
const router = express.Router();


const todo_list = require('../controller/todo_list')

// 查詢資料庫所有資料
router.get("/todoList",todo_list.getData)
// // 新增資料
router.post('/todoList',todo_list.addArticle)
// // 刪除資料
router.delete('/todoList',todo_list.deletArticle)
// // 更新資料
router.put('/todoList',todo_list.updateArticle)

module.exports = router;