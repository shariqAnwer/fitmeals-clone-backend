const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');


const userschema = mongoose.Schema({

    name: { type: String, required: true },
    password: { type: String, required: true },
    mbl_number: { type: Number, required: true },
    email: { type: String, required: true },


})
userschema.pre("save", function (next) {
    const hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash;
    return next();
});




const users = mongoose.model("user", userschema);

module.exports = users;

