const mongoose = require("mongoose");

const cartschema = new mongoose.Schema({

    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: Number, required: true },
    about_product: [{ type: String, required: false }],
    quantity: { type: Number, required: true },
    categories: [{ type: String, required: true }],
    subcategories: { type: String, required: true },
    userid:{type:String,required:true},
    nop:{type:Number,required:true}

})

const cart = mongoose.model("product", cartschema);

module.exports = cart;