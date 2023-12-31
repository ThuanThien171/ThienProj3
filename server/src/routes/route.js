const express = require('express');
// import controller


const router = express.Router();

//method router.method('/route',handler)
router.get('/', (req, res) => {
    res.render('test.ejs');
})

module.exports = router;
