const express = require('express')
const {getStats,updateStats,createStats } = require('../controller/stats.controller')
const adminMiddleware = require('../middleware/admin.middleware')

const router = express.Router()

router.get('/', getStats);
// router.post('/create', adminMiddleware, createStats);
router.post('/:id',adminMiddleware, updateStats);

module.exports = router