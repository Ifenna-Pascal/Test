// inport package
const express = require('express');
const mongoDBCoonection = require('./config/dbConnection');
const routes = require('./routes/index');

// initialize express app
const app = express();

// connect to DB
mongoDBCoonection();

app.use(express.json())

// route connection
app.use('/', routes);

// listen to server
app.listen(4000, () => {
    console.log('server listening on port');
});