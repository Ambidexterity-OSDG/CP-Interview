//Library
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const request = require('axios');

//DB
const db = require('../model/db');


exports.contestList = async function (req,res,next) {
    var status= req.params.id;
    if(!status) {
        status = "ongoing";
    }
    try {
        const params = {"status":status};
        const ongoingContest = await db.getAllContest(params);
        if(!ongoingContest.empty){
            const dbData = ongoingContest.docs.map(doc => Object.assign(doc.data(), {id: doc.id}));
            res.status(200).send({success:true,data:dbData})
        } else {
            res.status(404).send({success:false,data:{msg:"data not found"}})
        }          
    } catch (err) {
        console.log(err);
        res.status(503).send({success:false,reason:"DB connection Failed"});
    }
};


exports.showContest = async function (req,res,next) {
    var contestId = req.params.id;
    if(contestId){
        const params = {"contestId":contestId};
        const allQuestions = await db.getAllQuestions(params);
        if (!allQuestions.exists) {
            res.status(404).send({success:false,data:{msg:"data not found"}});
        } else {
            const dbData = allQuestions.data();
            res.status(200).send({success:true,data:dbData});
        }
    } else {
        res.status(404).send('<h1>NOT FOUND</h1>');
    }
};


exports.contestQuestions = async function (req,res,next) {
    const que = req.params.que;
    const id = req.params.id;
    try {
        const baseUrl = db.getContestURL;
        const fileURI = baseUrl + id +"%2F"+ que +".pdf";
        request.get(fileURI).then((response)=>{
            console.log(response);
            const filePath = fileURI+"?alt=media&token="+ response.data.downloadTokens;
            res.status(200).send({success:true,fileUrl:filePath});
        }).catch((err)=>{
            res.status(err.response.status).send({success:false,data:{msg:err.message}});
        })
    } catch (err) {
        res.status(503).send({success:false,data:{msg:"unable to fetch baseUrl"}});
    }
};

exports.submitQuestions = function (req,res,next) {
    var extension = req.body.language;
    var contest = req.params.id;
    var problemId = req.params.que;
    var submissionStatus = 0;
    if(extension == 'py'){
       exec(`cat ${path.join(__dirname,'..')}/ide/${contest}-${problemId}.txt | python3 ${path.join(__dirname,'..')}/uploads/file.py > ${path.join(__dirname,'..')}/uploads/output.txt`, (error)=>{
           if(error){
            //    console.log(error);
               return res.status(200).send({ success: true , status: 1 ,uploaded: "yes"});
           } else{
            var tmpBuf =  fs.readFileSync(`${path.join(__dirname,'..')}/ide/sol-${contest}-${problemId}.txt`);
            var testBuf = fs.readFileSync(`${path.join(__dirname,'..')}/uploads/output.txt`);
            if(tmpBuf.equals(testBuf)){
                submissionStatus = 2;
            } else {
                submissionStatus = 1;
            }
            const filePath = req.file.path;
            fs.unlink(filePath,(err)=>{
                if(err){
                    console.log(err);
                    return
                }
            });
            return res.json({ success: true , status: submissionStatus ,uploaded: "yes"});
           }
       })
    } else if(extension == 'js') {
        console.log('js');
    } else if( extension == 'java'){
        console.log('java')
    } else {
        return res.json({ success: true , status: 0 ,uploaded: "no"});
    }
}

exports.fillQuestionData = function(req,res,next){ 
    console.log(req.body);
    db.setQuestions(req.body.contestId,req.body.data, function(error,data){
        if(!error){
            res.status(200).send(data);
        } else {
            res.status(404).send(data);
        }
    });
} 

exports.fillContestData = function(req,res,next){ 
    console.log(req.body);
    db.setContest(req.body.contestId,req.body.data, function(error,data){
        if(!error){
            res.status(200).send(data);
        } else {
            res.status(503).send(data);
        }
    });
} 
// exports.fillQuestionData = async function(req,res,next){ 
//     console.log(req.body);
//     const val = db.setQuestions(req.body.contestId,req.body.data)
//     console.log(JSON.stringify(val));
//     res.status(200).send({"hi":"yes"});
//     res.status(200).json(ongoingContest)
// } 

// var filePath = `../data/${que}.pdf`;
// res.sendFile(path.join(__dirname , filePath));
//const params = {"contestId":id,"questionId":que};
//package dependency save save
// const packageLock = require('../../package-lock.json');
// const package = require('../../package.json');
// package.dependencies = Object.entries(packageLock.dependencies)
// .reduce((deps, [dep, { version }]) => Object.assign(deps, { [dep]: version }), {});
// fs.writeFileSync('./package-new.json', JSON.stringify(package, null, 2));