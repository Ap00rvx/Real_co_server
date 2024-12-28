const express = require('express')
const {  createProject,getAllProjects,getProject, updateProject,deleteProject} = require('../controller/projects.controller')
const adminMiddleware = require('../middleware/admin.middleware')
const router = express.Router()


router.post('/create', adminMiddleware, createProject);
router.get('/', getAllProjects);
router.get('/:id', getProject);
router.delete("/:id", deleteProject);
router.post('/:id',adminMiddleware, updateProject);

module.exports = router