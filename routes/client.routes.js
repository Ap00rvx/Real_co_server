const express = require('express')
const { createClient } = require('../controller/client.controller')
const adminMiddleware = require('../middleware/admin.middleware')
const router = express.Router()

router.post('/createClient', adminMiddleware, createClient); 


