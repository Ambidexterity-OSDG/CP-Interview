const express = require('express');
const fs = require('fs');
const multer = require('multer');
const uuid = require('uuid').v4;
const path = require('path');
const exec = require('child_process').exec;

// const upload = multer({dest:'uploads/'})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //console.log(req);
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        //console.log(file);
        const { originalname } = file;
        // or 
        // uuid, or fieldname
        cb(null, originalname);
    }
});

const upload = multer({ storage });


const contests = [
    { contestId:"aug1234", company:"flipkart", status:"ongoing",start:new Date().toLocaleString(),end:new Date().toLocaleString(),duration:"3",author:"adarsh",rating:4.5},
    { contestId:"aug1234", company:"google", status:"ongoing",start:new Date().toLocaleString(),end:new Date().toLocaleString(),duration:"3",author:"sushant",rating:4}
];

const questions = [
    {problemId:"1A",problemTitle:"Willy and Tail",contestId:"aug1234",points:100}
];

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//setup static & middleware
// app.use(express.static('./public'))
app.get('/contest/list',(req,res)=>{
    res.status(200).json(contests);
});

app.get('/contest/:id',(req,res)=>{
    var contestId = req.params.id;
    if(contestId){
        res.status(200).send(questions);
    } else {
        res.status(404).send('<h1>NOT FOUND</h1>');
    }
    
});
app.route('/contest/:id/:que')
   .get((req,res)=>{
    var que = req.params.que;
    var id = req.params.id;
    var filePath = `/data/${que}.pdf`;
    res.sendFile(__dirname + filePath);
    // fs.readFile(__dirname + filePath , function (err,data){
    //     res.contentType("application/pdf");
    //     res.send(data);
    // });
    })
    .post(upload.single('file'), (req,res)=>{
        const extension = req.body.language;
        const contest = req.params.id;
        const problemId = req.params.que;
        if(extension == 'py'){
           exec(`cat ${__dirname}/ide/1.txt | python3 ${__dirname}/uploads/file.py > output.txt`, (error)=>{
               if(error){
                   console.log(error);
                   return;
               } else{
                const filePath = path.join(__dirname,req.file.path);
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
    })
// app.post('',(req,res)=>{

// })

app.all('*',(req,res)=>{
    res.status(404).send('<h1>NOT FOUND</h1>');
})
app.listen(5000,()=>{
    console.log('server is started');
})


//curl -v -F language=py -F file=@file.py  http://localhost:5000/contest/aug1234/1A
// https://www.youtube.com/watch?v=UYh6EvpQquw
// https://www.youtube.com/watch?v=a30flH_q5-A&list=PL2dKqfImstaRhNOShwTdduXyRbID9GtmA&index=2
// https://www.youtube.com/watch?v=Oe421EPjeBE
//https://github.com/john-smilga/node-express-course
// lsof -i:<port_no>
// kill -9 <pid>
//https://www.youtube.com/watch?v=ysS4sL6lLDU
//https://stackoverflow.com/questions/46629086/node-js-file-upload-server-without-third-party-module/46655323#46655323
//https://stackoverflow.com/questions/46629086/node-js-file-upload-server-without-third-party-module/46655323#46655323
//https://www.youtube.com/watch?v=NsHgvKeAEDI
//https://stackoverflow.com/questions/58051617/how-to-add-custom-function-to-express-module