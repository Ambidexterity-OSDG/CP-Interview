//Library
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

//temp constants
const contests = require('../model/temp_data').contests;
const questions = require('../model/temp_data').questions;


exports.contestList = function (req,res,next) {
    res.status(200).json(contests);
};

exports.showContest = function (req,res,next) {
    var contestId = req.params.id;
    if(contestId){
        res.status(200).send(questions);
    } else {
        res.status(404).send('<h1>NOT FOUND</h1>');
    }
};

exports.contestQuestions = function (req,res,next) {
    var que = req.params.que;
    var id = req.params.id;
    var filePath = `../data/${que}.pdf`;
    res.sendFile(path.join(__dirname , filePath));
};

exports.submitQuestions = function (req,res,next) {
    const extension = req.body.language;
    const contest = req.params.id;
    const problemId = req.params.que;
    if(extension == 'py'){
       exec(`cat ${path.join(__dirname,'..')}/ide/1.txt | python3 ${path.join(__dirname,'..')}/uploads/file.py > output.txt`, (error)=>{
           if(error){
               console.log(error);
               return;
           } else{
            const filePath = req.file.path;
            fs.unlink(filePath,(err)=>{
                if(err){
                    console.log(err);
                    return
                }
            });
           }
       })
    } else if(extension == 'js') {
        console.log('js');
    } else if( extension == 'java'){
        console.log('java')
    } 
    return res.json({ status: 'OK', uploaded: "yes"});
}