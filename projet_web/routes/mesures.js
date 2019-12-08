var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var Measures = require('../controllers/controleur_m');


router.get('/:id', Measures.findOne);

module.exports = router;