var Candy = require('../models/candy'); 
 
// List of all Candy 
exports.candy_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Candy list'); 
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