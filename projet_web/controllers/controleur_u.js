const Users = require('../models/user.model');
const mongoose=require('mongoose');

//trouver tous les utilisateurs
exports.findAll = (req, res) => {
    Users.find()
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

  //trouver une mesure par son id
exports.findOne = (req, res) => {
    const iD=req.params.id;
    const id=mongoose.Types.ObjectId(iD);

    console.log(id);
    Users.findById(id)
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
    if (!req.body.location) {
      // If location is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'type can not be empty'
      });
    }
  
    // Create a new User
    const utilisateur = new Users();
      utilisateur.location= req.body.location;
      utilisateur.personsInHouse= req.body.personsInHouse;
      utilisateur.houseSize= req.body.houseSize;
    
    // Save Measure in the database
    utilisateur
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

  // Update a User par son id
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
    Users.findByIdAndUpdate(
      id,
      {
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize
      },
      { new: true }
    )
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'User not found with id ' + id
          });
        }
        res.send(data);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'User not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error updating user with id ' + id
        });
      });
  };