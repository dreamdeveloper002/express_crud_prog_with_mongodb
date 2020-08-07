const mongoose = require('mongoose');

const schema = require('../schema');



const Contact = mongoose.model('contact', schema);

const updateContact = (req, res) => {

   Contact.findOneAndUpdate({_id : req.params.contactID }, req.body, {new: true, useFindAndModify: false}, (error, response) => {

      error ? res.send(error) : res.json(response);
   })
}





module.exports = updateContact;