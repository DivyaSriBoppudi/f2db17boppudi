var express = require('express'); 
const candy_controlers= require('../controllers/candy'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', candy_controlers.candy_view_all_Page ); 

module.exports = router; 