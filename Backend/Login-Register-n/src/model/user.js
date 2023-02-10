const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShema = new Schema({

    id: {
        type: String,
        required: true


    },
    email: {
        type: String,
        required: true


    },

    password: {

        type: String,
        required: true

    },
    firstname: {

        type: String,
        required: true

    }




}, { collection: "users" });


module.exports = mongoose.model("user", userShema);