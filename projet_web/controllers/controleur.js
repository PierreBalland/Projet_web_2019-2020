const Sensors = require('../models/sensor.model');

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