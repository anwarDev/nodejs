// const http = require('http');
// const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// const routes = require('./routes');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); //For passing the request to next handler
// });
// app.use('/product',(req, res, next) => {
//     //res.send('<h1>Product added</h1>');
//     console.log(req.body);
//     // console.log(req.params);
//     res.redirect('/');
// });


// app.use('/',(req, res, next) => {
//     // console.log('In another middleware');
//     res.send('<h1>Hello from express</h1>');
// });

app.use((req, res, next) => {
    // console.log('In another middleware');
    // res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views','not-found.html'));
});


app.listen(9000);

// const server = http.createServer(app);

// const server = http.createServer((req, res) => {
//     // // console.log(req.url, req.method, req.headers);
//     // // process.exit();
//     // const url = req.url;
//     // const method = req.method;
//     // routes (req, res);
    
// });
// server.listen(9000);