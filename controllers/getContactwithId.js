const mongoose = require('mongoose');

const schema = require('../schema');



const Contact = mongoose.model('contact', schema);

const getContactById = (req, res) => {

    Contact.findById(req.params.contactID, (error, response) => {

        error ? res.send(error) : res.json(response);
    }) 
    
   
}





module.exports = getContactById;