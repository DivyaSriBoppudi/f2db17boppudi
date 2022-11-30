var express = require('express'); 
const candy_controlers= require('../controllers/candy'); 
var router = express.Router(); 
 
// A little function to check if we have an authorized user and continue on or  redirect to login. 

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET candies */ 
router.get('/', candy_controlers.candy_view_all_Page ); 

/* GET detail candy page */ 
router.get('/detail', candy_controlers.candy_view_one_Page); 

/* GET create candy page */ 
router.get('/create', secured, candy_controlers.candy_create_Page); 

/* GET create update page */ 
router.get('/update',secured, candy_controlers.candy_update_Page);

/* GET delete candy page */ 
router.get('/delete', secured, candy_controlers.candy_delete_Page); 

module.exports = router; 