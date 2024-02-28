const mongoose  = require("mongoose");

let tutorialDataSchema = new mongoose.Schema({
    "title":{
        required : true,
        type : String
    },
    "level":{
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

module.exports = mongoose.model("Tutorial",tutorialDataSchema);
