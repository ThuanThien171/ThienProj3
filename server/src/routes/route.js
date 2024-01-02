const express = require('express');
const { homeController, fbController } = require('../controllers/homeController');
// import controller


const router = express.Router();

//method router.method('/route',handler)
router.get('/', homeController);
router.get('/a', fbController);
module.exports = router;
