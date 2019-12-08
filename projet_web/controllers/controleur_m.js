const Measures = require('../models/measure.model');
const mongoose=require('mongoose');

//trouver toutes les mesures
exports.findAll = (req, res) => {
    Measures.find()
      .then(data => {
        res.send(data);
        console.log(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  };

//trouver une mesure
exports.findOne = (req, res) => {
    const iD=req.params.id;
    const id=mongoose.Types.ObjectId(iD);


    console.log(id);
    Measures.findById(id)
      .then(data => {
          if (!data) {
              return res.status(404).send({message: 'User found with id' + id
          })
          ;
      }
      res.send(data);
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
  if (!req.body.type) {
    // If type is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'type can not be empty'
    });
  }

  // Create a new Measure
  const mesure = new Measures();
    var mid = mongoose.Types.ObjectId(req.body.sensorID);
    mesure.type= req.body.type;
    mesure.creationDate= req.body.creationDate;
    mesure.sensorID= mid ;
    mesure.value= req.body.value;
  
  // Save Measure in the database
  mesure
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

// Update a Measure par son id
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.type) {
      return res.status(400).send({
        message: 'type can not be empty'
      });
    }
  
    // Find measure and update it with the request body
    const iD=req.params.id;
    const id=mongoose.Types.ObjectId(iD);
    sid=mongoose.Types.ObjectId(req.body.sensorID);
    Measures.findByIdAndUpdate(
      id,
      {
        type: req.body.type,
        creationDate: req.body.creationDate,
        sensorID: sid,
        value: req.body.value,
        
      },
      { new: true }
    )
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'Measure not found with id ' + id
          });
        }
        res.send(data);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Measure not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error updating user with id ' + id
        });
      });
  };