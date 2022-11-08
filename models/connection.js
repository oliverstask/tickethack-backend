const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://admin:1234@cluster0.m6zhd3a.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000})
.then(() => console.log('Database is connected whoa'))
.catch(error => console.error(error));