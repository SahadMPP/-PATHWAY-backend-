const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


// getting model instence

const Student = require("./user_student");

const Teacher = require("./user_teacher");

const Tutorial = require("./tutorial");

const Complaint = require("./complaint");

//  connecting to mongodb
const uri = "mongodb+srv://muhdsahad4916:kxvAcV0xZ5MePTKI@testmongo.se5zzhy.mongodb.net/flutter";


mongoose.set("strictQuery", true);

mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", () => {
    console.log("connection error")
})

db.once("open", () => {

    console.log("connected in mongodb")
    
    app.get("/",function (req,res){
     res.send("helloo");
    })


    // Authentication Apis ------------------------

    //  adding  student
    app.post("/api/add_student", async (req, res) => {
        console.log(req.body);
    
        const userEmail = req.body.email;
    
        // not add student if already in added
        const existingUser = await Student.findOne({ email: userEmail });

        if (existingUser) {
            console.log("user already exist");

            return res.status(404).json({
                "status": "User with this email already exists"
            })
        }

        // adding student if not added

        let data = Student(req.body);

        try {
            let dataToStore = await data.save();
            res.status(200).json(dataToStore);
        } catch (error) {

            res.status(400).json({
                "status": error.massage
            })

        }

    })

    //  adding  teacher
    app.post("/api/add_teacher", async (req, res) => {

        const userEmail = req.body.email;

        // not add teacher if already in here
        const existingUser = await Teacher.findOne({ email: userEmail });

        if (existingUser) {
            console.log("user already exist");

            return res.status(404).json({
                "status": "User with this email already exists"
            })
        }


        // add teacher is not existe

        // console.log("result", req.body);

        let data = Teacher(req.body);

        try {
            let dataToStore = await data.save();
            res.status(200).json(dataToStore);
        } catch (error) {

            res.status(400).json({
                "status": error.massage
            })

        }

    })

    //  login for student
    app.post("/api/log_student", async (req, res) => {

        console.log("student log is called");
        const userEmail = req.body.email;
        const userPassword = req.body.password;

        const existingUser = await Student.findOne({ email: userEmail });

        if (!existingUser) {
            return res.status(400).json({
                "status": "user not registed in database"
            })
        }

        if (existingUser.password == userPassword) {
            return res.status(200).json({
                "status": "user varified"
            })
        } else {
            return res.status(404).json({
                "status": "password is wrong"
            })
        }

    });

    //  login for teacher
    app.post("/api/log_teacher", async (req, res) => {

        console.log("teacher log is called");
        const userEmail = req.body.email;
        const userPassword = req.body.password;

        const existingUser = await Teacher.findOne({ email: userEmail });

        if (!existingUser) {
            return res.status(400).json({
                "status": "user not registed in database"
            })
        }

        if (existingUser.password == userPassword) {
            return res.status(200).json({
                "status": "user varified"
            })
        } else {
            return res.status(404).json({
                "status": "password is wrong"
            })
        }

    });



    // Admin side / tutorial crud Apis ------------------------

    // add tutorial
    app.post("/api/add_tutorial", async (req, res) => {
        let data = Tutorial(req.body);

        try {
            let dataToStore = await data.save();
            res.status(200).json(dataToStore);
        } catch (error) {

            res.status(400).json({
                "status": error.massage
            })
        }

    });

    // get tutorial
    app.get("/api/get_tutorial", async (req, res) => {
        try {
            let data = await Tutorial.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({
                "Status": "Data not found",
                "error": error.massage,
            })
        }
    });
    // update tutorial
    
    // delete tutorial
    app.delete("/api/delete_tutorial/:id",async (req,res)=>{
     let id = req.params.id;

    try {
        const data = await Tutorial.findByIdAndDelete(id);
        res.status(200).json({
           "status" : "delete successfully",
        })
    } catch (error) {
        res.status(400).json(error.massage);
    }
    });

    // complaint CURD Apis ------------------------

    // add complaint

    app.post("/api/add_complaint", async (req, res) => {
        let data = Complaint(req.body);

        try {
            let dataToStore = await data.save();
            res.status(200).json(dataToStore);
        } catch (error) {

            res.status(400).json({
                "status": error.massage
            })
        }


    });

    // get all complaint  

    app.get("/api/get_complaint", async (req, res) => {
        try {
            let data = await Complaint.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({
                "Status": "Data not found",
                "error": error.massage,
            })
        }
    });

    // delete complaint

    app.delete("/api/delete_complaint/:id",async (req,res)=>{
        let id = req.params.id;
   
       try {
           const data = await Complaint.findByIdAndDelete(id);
           res.status(200).json({
              "status" : "delete successfully",
           })
       } catch (error) {
           res.status(400).json(error.massage);
       }
       });
});



// connecting to server

app.listen(80, () => {
    console.log("connected to 80 port");
})