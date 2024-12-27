const express = require('express')
const { createClient,getAllClients,updateClient } = require('../controller/client.controller')
const adminMiddleware = require('../middleware/admin.middleware')
const router = express.Router()

router.post('/createClient', adminMiddleware, createClient); 
router.get('/', getAllClients);
router.post('/:id',adminMiddleware, updateClient);



module.exports = router