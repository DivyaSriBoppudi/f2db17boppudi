var express = require('express'); 
const candy_controlers= require('../controllers/candy'); 
var router = express.Router(); 
 
/* GET candies */ 
router.get('/', candy_controlers.candy_view_all_Page ); 

/* GET detail candy page */ 
router.get('/detail', candy_controlers.candy_view_one_Page); 

/* GET create candy page */ 
router.get('/create', candy_controlers.candy_create_Page); 

module.exports = router; 