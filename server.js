const express = require('express');
const route = require('./route');
const app = express();
const mongoose = require('mongoose');
const bodyParser= require('body-parser');


const port = 3000;

//mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

//bodypaser setup

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());




route(app);

app.get('/', (req, res) => {

   res.send(`your server is running on port ${port}`)
})


app.listen(port, () => {
  
    console.log(`your server is running on port ${port}`);
  
})