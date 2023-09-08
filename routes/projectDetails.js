const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectDetailsController' )
router.get('/', projectController.home)
router.get('/:id', projectController.issueId)
router.get('/edit/:id', projectController.edit)
router.put('/edit/:id', projectController.addIssue)
module.exports = router;