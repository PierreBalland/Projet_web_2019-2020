const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
    {
      _id:  mongoose.Schema.Types.ObjectId,
      creationDate: String,
      location: String,
      userID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }
    }
  );
/*
const userSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    location: String,
    personsInHouse: Number,
    houseSize: String
}
);

const measureSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type:String,
    creationDate: String,
    sensorID:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'sensorSchema'
    },
    value:Number
});
*/
//module.exports = mongoose.model('User', userSchema); 
module.exports = mongoose.model('Sensors', sensorSchema);
//module.exports = mongoose.model('Measure', measureSchema);
