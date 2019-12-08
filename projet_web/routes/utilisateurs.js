var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var Users = require('../controllers/controleur_u');


router.get('/:id', Users.findOne);

module.exports = router;