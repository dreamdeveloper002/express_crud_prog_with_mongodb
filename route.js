
const contact = require('./controllers/create');
const getContact = require('./controllers/create');
const getContactbyId = require('./controllers/getContactwithId')
const updateContact = require('./controllers/update')
const deleteContact = require('./controllers/deleteContact')
const route = (app) => {

    app.route('/contact')
    .get(getContact)
     
  
    // post contact
    .post(contact)

    app.route('/contact/:contactID')

    //get contact by a specific id
    .get(getContactbyId)

   

    //updating contact
    .put(updateContact)

    
    //deleting contact
    .delete(deleteContact)
}


module.exports = route;