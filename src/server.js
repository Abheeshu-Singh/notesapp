const express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const mongoose = require('mongoose');
const Note = require('./models/Note');
const User = require('./models/User');

mongoose.connect("mongodb+srv://Abheeshu:tanu011215@cluster0.cpnzpd2.mongodb.net/notesdb").then(function()
{
    app.get("/", function(req, res){
        res.send("hey")
    })
    
    app.get("/notes/list",async function(req, res){
        var notes = await Note.find();
        res.json(notes);
    })

    app.post("/notes/add", async function(req, res){
        try {
            const newNote = new Note(
                req.body
             );
     
            const data = await newNote.save();
            if (data) {
             const response = {message: "New Note Created!"};
             res.json(response);
            } else {
             const response = {message: "Eror 404"};
             res.json(response);
            }
        } catch (error) {
            res.json(error);  
        }  
    })


    app.post("/user/add", async function(req, res){
        try {
            const newUser = new User(
                req.body
             );
     
            const data = await newUser.save();
            if (data) {
             const response = {message: "New User Created!"};
             res.json(response);
            } else {
             const response = {message: "Eror 404"};
             res.json(response);
            }
        } catch (error) {
            res.json(error);  
        }  
    })


    app.get("/user/list",async function(req, res){
        const users = await User.find();
        res.json(users);
    })


})




app.listen(1001);