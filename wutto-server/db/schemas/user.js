const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id:         number,
    firstName:  String,
    lastName:   String,
    email:      String,
    phoneNo:    String    
})

exports.userSchema = userSchema;