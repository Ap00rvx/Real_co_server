const {getGeneral,updateGeneral,createGeneral} = require('../controller/general.controller');
const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/admin.middleware');

router.get('/', getGeneral);
router.post('/create', adminMiddleware, createGeneral);
router.post('/:id', adminMiddleware, updateGeneral);

module.exports = router;