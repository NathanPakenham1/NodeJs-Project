const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customController')

router.get('/', customerController.homepage);

module.exports = router