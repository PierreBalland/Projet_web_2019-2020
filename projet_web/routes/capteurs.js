var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sensors = require('../controllers/controleur');

//Get a sensor by id
router.get('/:id', Sensors.findOne);
//get all sensors
router.get('/',Sensors.findAll);
//add a sensor
router.put('/', Sensors.create);
//update sensor by id
router.post('/:id', Sensors.update);
// delete a sensor by id
router.delete('/:id',Sensors.delete);

module.exports = router;