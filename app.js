const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./routes/routes');
var path = require('path');
var bodyParser = require('body-parser');


const app = express();


//Connecting with database:
const dbURI = 'mongodb+srv://testing:hello123@klimb.1xrls.mongodb.net/Klimb?retryWrites=true&w=majority';
mongoose.connect(dbURI) 
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));



app.set('view engine','ejs')
app.listen(5007);
app.use(express.static(path.resolve(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', Routes);