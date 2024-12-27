const express = require('express')
const { createService,getAllServices,deleteService,deleteAllServices,updateService} = require('../controller/services.controller')
const adminMiddleware = require('../middleware/admin.middleware')

const router = express.Router()

router.post('/create', adminMiddleware, createService);
router.get('/', getAllServices);
router.delete('/delete/:id',adminMiddleware, deleteService);
router.delete('/deleteAll',adminMiddleware, deleteAllServices);
router.post('/:id',adminMiddleware, updateService);


module.exports = router