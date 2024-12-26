const express = require('express')
const { createService,getAllServices } = require('../controller/services.controller')
const adminMiddleware = require('../middleware/admin.middleware')

const router = express.Router()

router.post('/create', adminMiddleware, createService);
router.get('/', getAllServices);


module.exports = router