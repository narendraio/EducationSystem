require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const port = process.env.PORT || 3000;

const rtsIndex = require('./routes/index.router');

var app = express();

app.set('port', (process.env.PORT || 5000));




// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

// start server
// app.listen(port, () => console.log(`Server started at port : ${port}`));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });