const Candidate = require('../model/candidate');
var multer = require('multer');
const path = require('path');
var XLSX = require('xlsx');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  
const upload = multer({ storage: storage });


const home_get = (req,res)=>{
    Candidate.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            if(data!=''){
                res.render('home',{result:data});
            }else{
                res.render('home',{result:{}});
            }
        }
    });
}

const home_post = (upload.single('excel'),(req,res)=>{
    var workbook =  XLSX.readFile(req.file.path);
    var sheet_namelist = workbook.SheetNames;
    var x=0;
    sheet_namelist.forEach(element => {
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
        Candidate.insertMany(xlData,(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        })
        x++;
    });
    res.redirect('/');
  });

module.exports = {
    home_get,
    home_post
  }