const express = require('express');
const router = express.Router();
const cloudController = require('../controllers/cloudController');

router.get('/', cloudController.getCloudServices);

module.exports = router;
