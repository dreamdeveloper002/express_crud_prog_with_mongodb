const mongoose = require('mongoose');

const schema = require('../schema');



const Contact = mongoose.model('contact', schema);

const getContact = (req, res) => {

   Contact.find({}, (error, response) => {

      error ? res.send(error) : res.json(response);
   })
}





module.exports = getContact;