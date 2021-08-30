/** packages */
const mongoose = require("mongoose");

/** Schema creation */

const trademarkSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    }
});


/** schema exportation */
module.exports = trademarkSchema;