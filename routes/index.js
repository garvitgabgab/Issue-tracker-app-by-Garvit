const express = require('express');
const router = express.Router();


const homeController = require('../controllers/homeController' )
router.get('/', homeController.home)


router.use('/projectDetails', require('./projectDetails'));
module.exports = router;