const mongoose = require("mongoose") 
const candySchema = mongoose.Schema({ 
 candy_name: String,
 candy_flavor: String,
 candy_cost: Number
}) 
 
module.exports = mongoose.model("Candy", candySchema) 
