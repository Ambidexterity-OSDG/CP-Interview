const express = require('express');
const route = express.Router()

// const services = require('../service/service');
const middlewares = require('../middleware/middleware');
const controller = require('../controller/controller');

/**
 *  @description contest List
 *  @method GET /contest/list
 */
route.get('/contest/list', controller.contestList);

/**
 *  @description Particular contest
 *  @method GET /contest/:id
 */
route.get('/contest/:id', controller.showContest);

/**
 *  @description for contest questions
 *  @method GET /contest/:id/:que
 */
route.get('/contest/:id/:que', controller.contestQuestions);

/**
 *  @description for contest questions
 *  @method POST /contest/submit/:id/:que
 */
 route.post('/contest/submit/:id/:que', middlewares.upload ,controller.submitQuestions);

 /**
  * @description handle 404
  * @method all 
  */
route.all('*',(req,res)=>{
    res.status(404).send('<h1>NOT FOUND</h1>');
});

// API
// route.post('/api/users', controller.create);
// route.get('/api/users', controller.find);
// route.put('/api/users/:id', controller.update);
// route.delete('/api/users/:id', controller.delete);


module.exports = route
