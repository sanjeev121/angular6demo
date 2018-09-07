const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/angularcr').then(
      () => {console.log('Database connected!!...') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const addProductRoutes = require('./routes/addproduct.route');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/addproducts', addProductRoutes);

    const server = app.listen(port, function(){
     console.log('Server is Running on port ' + port);
    });