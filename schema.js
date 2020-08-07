const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const users_schema = new Schema({

  firstName : {
      type : String,
      required  : 'enter your first name'

  },

  password : {
      type : String,
      required : 'enter your password'
  },

  email : {
    type : String
},

  phone: {
    type :  Number
}, 

createdDate : {
    type : Date,
    default: Date.now
}

});

module.exports = users_schema;