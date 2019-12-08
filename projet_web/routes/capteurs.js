var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//import models from '../app';
//import { create } from 'domain';
//import sensorSchema from '../models/sensor.model';

//var Sensors = require('../models/sensor.model');

/* GET one user */
//router.get('/', capteur.find);
/*

router.get('/', async(req,res)=>{
    const {sens} =await Sensors.find();
    console.log("ca marche");
    return res.json(sens);
    

});
*/
var Sensors = require('../controllers/controleur');

var Users = require('../controllers/controleur_u');

const app=express();
/* GET one user */
//router.get('/:userId', user.findOne);
/*

router.get('/', async (req, res) => {
    const user = await req.context.models.Sensors.findById(
        req.context.me.id,
    );
    return res.send(user);
});


router.get('/:userId', async (req, res) => {
    const user = await req.context.models.Sensors.findById(
        req.params._id,
    );
    return res.send(user);
});
*/

//Get a sensor by id
router.get('/:id', Sensors.findOne);


/* DELETE  one user */
//router.delete('/:userId', user.delete);

/* update  one user */
//router.post('/:userId', user.update);

/* create  one user */
//router.put('/', user.create);


module.exports = router;

/*
router.get('/',(req,res)=>{
    db.collection("Sensor").find().toArray(function (error, results) {
        if (error) throw error;

        results.forEach(function(i, obj) {
            console.log(
                "ID:" + obj._id.toString()+ '/n',
                "creationdate:"+obj.creationDate+"/n",
                "location:"+obj.location+'/n',
                "userID:"+obj.userID.toString());

            });
        });
    });
*/
router.post('/', (req,res)=>{
    var sensor = new Sensors();

    var uid = mongoose.Types.ObjectId(req.body.userID);
    var id =mongoose.Types.ObjectId(req.body._id);

      sensor._id= id;
      sensor.creationDate= req.body.creationDate;
      sensor.location= req.body.location;
      sensor.userID= uid ;
    
  
    // Save User in the database
    sensor
      .save()
      .then(data => {
        // we wait for insertion to be complete and we send the newly user integrated
        res.send(data);
      })
      .catch(err => {
        // In case of error during insertion of a new user in database we send an
        // appropriate message
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the User.'
        });
      });
  });


/* DELETE  one user */
//router.delete('/:userId', user.delete);

/* update  one user */
//router.post('/:userId', user.update);

/* create  one user */
//router.put('/', user.create);


module.exports = router;