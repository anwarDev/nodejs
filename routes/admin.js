const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const products = [];
router.get('/add-product',(req, res, next) => {    
    // res.send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add</button></form>');
    // res.sendFile(path.join(__dirname,'..', 'views','add-product.html'));
    res.sendFile(path.join(rootDir, 'views','add-product.html'));

});

router.post('/add-product',(req, res, next) => {
    //res.send('<h1>Product added</h1>');
    console.log(req.body);
    products.push({title: req.body.title });
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
