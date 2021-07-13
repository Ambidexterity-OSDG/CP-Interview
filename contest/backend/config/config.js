const config = {
    default: {
        server : {
            ip : '127.0.0.1',
            port : 5000
        },
        mongo :{
            url : "url",
            options : ""
        }

    },
    dev : {
        // copy paste default
    },
    prod : {
        //copy paste default
    }
} 

module.exports = config;





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * Template config.js (In future we will introduce the convict for config) *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */  


// var config = module.exports
// var PRODUCTION = process.env.NODE_ENV === 'production'

// config.express = {
//   port: process.env.EXPRESS_PORT || 3000,
//   ip: '127.0.0.1'
// }

// config.mongodb = {
//   port: process.env.MONGODB_PORT || 27017,
//   host: process.env.MONGODB_HOST || 'localhost'
// }
// if (PRODUCTION) {
//   // for example
//   config.express.ip = '0.0.0.0'
// }