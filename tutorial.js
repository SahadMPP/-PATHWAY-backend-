const mongoose  = require("mongoose");

let tutorialDataSchema = new mongoose.Schema({
    "title":{
        required : true,
        type : String
    },
    "creator":{
        required : true,
        type : String
    },
    "category":{
        required : true,
        type : String
    },
    "tumbnailImage":{
        required : true,
        type : String
    },
    "videoUrl":{
        required : true,
        type : String
    },
    "duration":{
        required : true,
        type : Number
    },
    "discription":{
        required : true,
        type : String
    },
});

module.exports = mongoose.model("tutorial",tutorialDataSchema);
