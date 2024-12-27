const express = require('express')
const {  createProject,getAllProjects,getProject, updateProject} = require('../controller/projects.controller')
const adminMiddleware = require('../middleware/admin.middleware')
const router = express.Router()


router.post('/create', adminMiddleware, createProject);
router.get('/', getAllProjects);
router.get('/:id', getProject);
router.post('/:id',adminMiddleware, updateProject);

module.exports = router