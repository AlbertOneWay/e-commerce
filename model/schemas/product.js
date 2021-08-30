/** packages */
const mongoose = require("mongoose");

/** Schema creation */

const productSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    },
    price:{
        type: "Number",
        required: true
    },
    existence:{
        type: "Number",
        required: true
    },
    qualification:{
        type: "Number",
        required: true,
        min: 0,
        max:5
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_category",
        required: true
    },
    trademark_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_trademark",
        required: true
    },
    discount:{
        type: "Number",
        required: false
    }
});


/** schema exportation */
module.exports = productSchema;