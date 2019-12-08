const Users = require('../models/user.model');

const mongoose=require('mongoose');

exports.findOne = (req, res) => {
    console.log("Bonjour");
    const pierre=req.params.id;
    const id=mongoose.Types.ObjectId(pierre);


    console.log(id);
    Measures.findById(id)
      .then(measures => {
          if (!measures) {
              return res.status(404).send({message: 'User found with id' + id
          })
          ;
      }
      res.send(measures);
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