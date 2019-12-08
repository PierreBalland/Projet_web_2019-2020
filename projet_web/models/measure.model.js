const mongoose = require('mongoose');

const measureSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type:String,
    creationDate: String,
    sensorID:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Sensors'
    },
    value:Number
    },
    {collection: 'Measure'}
);
module.exports = mongoose.model('Measures',measureSchema);