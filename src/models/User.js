const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxLength: 20,
        minLength: 6
        
    },
    created_at: { type: Date,default: Date.now, },
    updated_at: { type: Date,default: Date.now, }
    
   
});

module.exports =  mongoose.model("User", userSchema)