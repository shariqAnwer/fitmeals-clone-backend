const mongoose = require("mongoose");

const cartschema = new mongoose.Schema({

    image: { type: String, required: false },
    title: { type: String, required: false },
    price: { type: Number, required: false },
    description: { type: String, required: false },
    about_product: [{ type: String, required: false }],
    quantity: { type: Number, required: false },
    categories: [{ type: String, required: false }],
    subcategories: { type: String, required: false },
    userid:{type:String,required:false},
    nop:{type:Number,required:false}

})

const cart = mongoose.model("cart", cartschema);

module.exports = cart;