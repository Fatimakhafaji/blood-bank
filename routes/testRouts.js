const express = require('express');
const { testcontroller } = require('../controllers/testcontroller');

//router object

const router = express.Router();

//router

router.get('/', testcontroller);

//export
module.exports = router;