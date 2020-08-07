const mongoose = require('mongoose');

const schema = require('../schema');



const Contact = mongoose.model('contact', schema);

const deleteContact = (req, res) => {

   Contact.remove({_id : req.params.contactID }, (error, response) => {

      error ? res.send(error) : res.json({ message : 'DELETED'});
   })
}





module.exports = deleteContact;