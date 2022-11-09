var Candy = require('../models/candy'); 

// List of all Candies 
exports.candy_list = async function(req, res) { 
    try{ 
        theCandies = await Candy.find(); 
        res.send(theCandies); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Candy. 
exports.candy_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Candy detail: ' + req.params.id); 
}; 
 
// Handle Candy create on POST. 
exports.candy_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Candy create POST'); 
}; 
 
// Handle Candy delete form on DELETE. 
exports.candy_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Candy delete DELETE ' + req.params.id); 
}; 
 
// Handle Candy update form on PUT. 
exports.candy_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Candy update PUT' + req.params.id); 
};

// VIEWS 
// Handle a show all view 
exports.candy_view_all_Page = async function(req, res) { 
    try{ 
        theCandies = await Candy.find(); 
        res.render('candies', { title: 'Candy Search Results', results: theCandies }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 