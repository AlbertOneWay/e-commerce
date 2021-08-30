/** packages */
const mongoose = require("mongoose");

/** Schema creation */

const imageSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_product",
        required: true
    }
});


/** schema exportation */
module.exports = imageSchema;