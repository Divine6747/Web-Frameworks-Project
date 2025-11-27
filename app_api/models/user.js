const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: [3, "First name must be at least 3 characters"]
    },
    lastName: {
        type: String,
        required: true, 
        trim: true,
        minlength: [2, "Last name must be at least 2 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },    
    username: {
        type: String,
        required: [true, "Username must be at least 5 characters"],
        unique: true,
        trim: true,
        minlength: [5, "Username must be at least 5 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [7, "Password must be at least 7 characters"]
    }
});

mongoose.model('User', userSchema);
