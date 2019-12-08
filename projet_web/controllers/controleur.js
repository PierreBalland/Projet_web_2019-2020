const Sensors = require('../models/sensor.model');

const mongoose=require('mongoose');

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
          })
          ;
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