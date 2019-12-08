const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    location: String,
    personsInHouse: Number,
    houseSize: String
},
{collection: 'User'}
);
module.exports = mongoose.model('Users',userSchema);