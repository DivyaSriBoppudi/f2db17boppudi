var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var candy_controller = require('../controllers/candy'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// CANDY ROUTES /// 
 
// POST request for creating a Candy.  
router.post('/candies', candy_controller.candy_create_post); 
 
// DELETE request to delete Candy. 
router.delete('/candies/:id', candy_controller.candy_delete); 
 
// PUT request to update Candy. 
router.put('/candies/:id', candy_controller.candy_update_put); 
 
// GET request for one Candy. 
router.get('/candies/:id', candy_controller.candy_detail); 
 
// GET request for list of all Candy items. 
router.get('/candies', candy_controller.candy_list); 
 
module.exports = router; 