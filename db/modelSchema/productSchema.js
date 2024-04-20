const mongoos = require('mongoose');

const ProductSchema = new mongoos.Schema({
    name: String,
    price: String,
    catogary: String,
    compony: String,
    imageUrl: String,
    gender: String,
    description: String,
    usertId: String,
})
module.exports = mongoos.model('products', ProductSchema);