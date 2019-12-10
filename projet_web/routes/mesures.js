var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var Measures = require('../controllers/controleur_m');

router.get('/', Measures.findAll);
router.get('/:id', Measures.findOne);
router.put('/',Measures.create);
router.post('/:id' ,Measures.update);
router.delete('/:id',Measures.delete);
module.exports = router;