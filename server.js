"use strict"; //For use with ES6

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const compression = require('compression');
const routes = require('./api/routes');

app.use(compression());
app.use(morgan('dev')); // log with Morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));
app.use(methodOverride());
app.use(cors()); //enable CORS


//Mount our route file that we have yet to create.
app.use('/', routes);


// error handlers

// catch 404 and forward to error handler
if (app.get('env') === 'development') {
    app.use( (req, res, next) => {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
}

// development error handler
if (app.get('env') === 'development') {
    app.use( (err, req, res, next) => {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// // production error handler
if (app.get('env') === 'production') {
app.use( (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});
}

server.listen(5000, () => {
    console.log('Server listening at port 5000');
});