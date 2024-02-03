const mongoose = require("mongoose");

let StudentDataShema = new mongoose.Schema({

    "name":{
        required : true,
        type : String
    },
    "email":{
        required : true,
        type : String
    },
    "password":{
        required : true,
        type : String
    },
});

module.exports = mongoose.model("student",StudentDataShema);