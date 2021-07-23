const express = require('express');
const fs = require('fs');
const multer = require('multer');
const uuid = require('uuid').v4;
const path = require('path');
const dotenv = require('dotenv');
var cors = require('cors');
const exec = require('child_process').exec;

//LOAD CONFIG
dotenv.config({path : './config/config.env'});
const config = require('./config/config')[process.env.NODE_ENV || 'default'];

const app = express();

//parser
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//cors
app.use(cors({origin: '*'}))

//Routes
app.use('/',require('./contest/routes/routes'))

//Server
const ip = config.server.ip;
const port = config.server.port;

app.listen(port,ip,()=>{
    console.log('server is started');
})


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *   In Future will Introduce:                                             *
 *       1) convict for config                                             *
 *       2) new Service layer Instead of controller                        *
 *                                                                         *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */  




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