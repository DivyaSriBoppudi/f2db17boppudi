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
exports.candy_detail =async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Candy.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Candy create on POST. 
exports.candy_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Candy(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"candy_name":"Charms", "candy_flavor": "Cherry", "candy_cost":12} 
    document.candy_name = req.body.candy_name; 
    document.candy_flavor = req.body.candy_flavor; 
    document.candy_cost = req.body.candy_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
}; 
 
// Handle Candy delete form on DELETE. 
exports.candy_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Candy delete DELETE ' + req.params.id); 
}; 
 
// Handle Candy update form on PUT. 
exports.candy_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await Candy.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.candy_name) toUpdate.candy_name = req.body.candy_name; 
            if(req.body.candy_flavor) toUpdate.candy_flavor = req.body.candy_flavor; 
            if(req.body.candy_cost) toUpdate.candy_cost = req.body.candy_cost; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
        } 
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