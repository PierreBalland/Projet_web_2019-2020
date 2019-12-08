const Sensors = require('../models/sensor.model');
const mongoose=require('mongoose');


// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    Sensors.find()
      .then(sensors => {
        res.send(sensors);
        console.log(sensors);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  };

  // Retrieve and return all Users from the database.
exports.findOne = (req, res) => {
    console.log("Bonjour");
    const pierre=req.params.id;
    const id=mongoose.Types.ObjectId(pierre);

    console.log(id);
    Sensors.findById(id)
      .then(sensors => {
          if (!sensors) {
              return res.status(404).send({message: 'User found with id' + id
          });
      }
      res.send(sensors);
})
.catch(err => {
    if (err.kind === 'ObjectId') {
        return res.status(404).send({
            message: 'User not found  id ' + id
        });
    }
    return res.status(500).send({
        message: 'Error retrieving user with id ' + id
    });
});
};

  // Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.location) {
      // If location is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'location can not be empty'
      });
    }
  
    // Create a new User
      var sensor = new Sensors()
      sensor.creationDate= req.body.creationDate;
      sensor.location= req.body.location;
      sensor.userID= req.body.userID;
    
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
  };

  // Update a Sensor par son id
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.location) {
      return res.status(400).send({
        message: 'location can not be empty'
      });
    }
  
    // Find user and update it with the request body
    const iD=req.params.id;
    const id=mongoose.Types.ObjectId(iD);
    uid=mongoose.Types.ObjectId(req.body.userID);
    Sensors.findByIdAndUpdate(
      id,
      {
          
        creationDate: req.body.creationDate,
        personsInHouselocation: req.body.location,
        userID: uid
      },
      { new: true }
    )
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'Sensor not found with id ' + id
          });
        }
        res.send(data);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Sensor not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error updating user with id ' + id
        });
      });
  };

