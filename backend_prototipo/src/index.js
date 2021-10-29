const express = require('express');
const ejs = require('ejs');
const router = require('./routes/routes');

const path = require('path');

const cors = require('cors');
const morgan = require('morgan');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(router);


// Static files
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.resolve('uploads')));




// Start the server
const server = app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});



module.exports = {app, server};