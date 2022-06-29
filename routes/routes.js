const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router();


router.get('/', Controller.home_get);
router.post('/', Controller.home_post);


module.exports = router;