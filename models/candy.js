const mongoose = require("mongoose") 
const candySchema = mongoose.Schema({ 
 candy_name: {type: String, required: [true, 'Candy Name should not be empty']},
 candy_flavor: {type: String, required: [true, 'Candy flavor should not be empty']},
 candy_cost: {type: Number, min: [1, 'Minimum cost should be $1'], max: [40, 'Maximum cost should not exceed $40']}
}) 
 
module.exports = mongoose.model("Candy", candySchema) 
