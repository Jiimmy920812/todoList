const express = require('express');
const router = express.Router();


const finance = require('../controller/finance')

// 查詢資料庫所有資料
router.get("/getData",finance.getData)
// // 新增資料
router.post('/addArticle',finance.addArticle)
// // 刪除資料
router.post('/deletArticle',finance.deletArticle)
// // 更新資料
router.post('/updateArticle',finance.updateArticle)

module.exports = router;