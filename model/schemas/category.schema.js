/** packages */
const mongoose = require("mongoose");

/** Schema creation */

const categorySchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    }
});


/** schema exportation */
module.exports = categorySchema;