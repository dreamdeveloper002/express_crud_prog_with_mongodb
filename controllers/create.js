const mongoose = require('mongoose');

const schema = require('../schema');



const Contact = mongoose.model('contact', schema);

const createNewContact = (req, res) => {

    let newContact = new Contact(req.body)

   newContact.save((error, response) => {

      error ? res.send(error) : res.json(response);
   })
}





module.exports = createNewContact;