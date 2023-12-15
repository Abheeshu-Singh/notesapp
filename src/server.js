const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


const mongoose = require('mongoose');
const Note = require('./models/Note');


mongoose.connect("mongodb+srv://Abheeshu:tanu011215@cluster0.cpnzpd2.mongodb.net/notesdb").then(function()
{
    app.get("/", function(req, res){
        const response = {message: "API Works! "};
        res.json(response);
    });
    const noteRouter =require('./routes/Note')
    app.use("/notes", noteRouter);
})
app.listen(1001);