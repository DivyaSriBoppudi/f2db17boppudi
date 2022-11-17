var express = require('express'); 
const candy_controlers= require('../controllers/candy'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', candy_controlers.candy_view_all_Page ); 

/* GET detail costume page */ 
router.get('/detail', candy_controlers.candy_view_one_Page); 
module.exports = router; 