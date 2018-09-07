

const express = require('express');
const app = express();
const addProductRoutes = express.Router();

// Require AdUnit model in our routes module
let AddProduct = require('../models/AddProduct');

// Defined store route
addProductRoutes.route('/add').post(function (req, res) {
  let addProduct = new AddProduct(req.body);
  addProduct.save()
    .then(game => {
    res.status(200).json({'addProduct': 'Product is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
addProductRoutes.route('/').get(function (req, res) {
    AddProduct.find(function (err, addProducts){
    if(err){
      console.log(err);
    }
    else {
      res.json(addProducts);
    }
  });
});

// Defined edit route
addProductRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AddProduct.findById(id, function (err, addProduct){
      res.json(addProduct);
  });
});

//  Defined update route
addProductRoutes.route('/update/:id').post(function (req, res) {
    AddProduct.findById(req.params.id, function(err, addProduct) {
    if (!addProduct)
      return next(new Error('Could not load Document'));
    else {
        addProduct.product = req.body.product;
        addProduct.instock = req.body.instock;
        addProduct.ware_house = req.body.ware_house;
        addProduct.save().then(addProduct => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
addProductRoutes.route('/delete/:id').get(function (req, res) {
    AddProduct.findByIdAndRemove({_id: req.params.id}, function(err, addUser){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = addProductRoutes;