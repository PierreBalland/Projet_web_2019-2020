const mongoose = require('mongoose');

var sensorSchema = new mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId,
            auto: true},
      creationDate: String,
      location: String,
      userID: {
          type: mongoose.Types.ObjectId,
          ref: 'Users'
      }},
      {collection:'Sensor'}
      
      //userID: mongoose.Types.ObjectId
    
  );

module.exports = mongoose.model('Sensors',sensorSchema);
