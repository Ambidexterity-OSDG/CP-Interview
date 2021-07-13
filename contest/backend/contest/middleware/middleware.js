const multer = require('multer');
const path = require('path');
const uuid = require('uuid').v4;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //console.log(req);
        cb(null, path.join(__dirname,'../uploads'))
    },
    filename: (req, file, cb) => {
        // console.log(file);
        const { originalname } = file;
        // or 
        // uuid, or fieldname
        cb(null, originalname);
    }
});

const fileupload = multer({ storage }).single('file');

exports.upload = fileupload;