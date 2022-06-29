const Candidate = require('../model/candidate');
const path = require('path');
var XLSX = require('xlsx');


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

const home_post = (req,res)=>{
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
    var g=5;
    res.redirect('/');
  };

module.exports = {
    home_get,
    home_post
  }