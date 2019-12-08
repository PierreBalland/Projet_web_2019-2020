const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
    {
      _id:  mongoose.Schema.Types.ObjectId,
      creationDate: String,
      location: String,
      /*userID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }*/
      userID: mongoose.Types.ObjectId
    }

  );
/*
sensorSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
        _id: login,
    });
    if (!user) {
        user = await this.findOne({ email: login });
    }
    return user;
};
*/

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
