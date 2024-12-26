const express = require('express')
const { createUser,login ,getUser,deleteUser} = require('../controller/user.controller')
const adminMiddleware = require('../middleware/admin.middleware')

const router = express.Router()

router.post('/register',  adminMiddleware,createUser);
router.post('/login', login);
router.get('/users', getUser);
router.delete('/delete/:username',adminMiddleware, deleteUser);

module.exports = router