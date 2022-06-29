const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./routes/routes');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');


const app = express();


//Connecting with database:
const dbURI = 'mongodb+srv://testing:hello123@klimb.1xrls.mongodb.net/Klimb?retryWrites=true&w=majority';
mongoose.connect(dbURI) 
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));


//Defining Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/public/uploads/'));
    },
    filename: function (req, file, cb) {
       cb(null, file.originalname)
    }
    });
      
const upload = multer({ storage: storage });


//Middlewares
app.set('view engine','ejs')
app.listen(4319);
app.use(express.static(path.resolve(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));



//Routing
app.use('/', upload.single('excel'), Routes);