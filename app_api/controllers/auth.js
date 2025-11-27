require('../models/user');
const mongoose = require('mongoose');
const User = mongoose.model('User');


const userRegister = async (req, res) => {
const { firstName, lastName, username, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: "All fields must be entered" });
    }

    if(password !== confirmPassword){
        return res.status(400).json({error: "Password does not match confirm password"})
    }

    if (password.length < 7) {
        return res.status(400).json({ error: "Password must be at least 7 characters" });
    }

    try {
        const exists = await User.findOne({ username });
        if (exists) {
            return res.status(400).json({ error: "Username already in use" });
        }

        const existsEmail = await User.findOne({ email });
        if (existsEmail) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const newUser = new User({ 
            firstName,
            lastName,
            username,
            email,
            password
        });

        await newUser.save();

        return res.status(200).json({ status: "success" });
    }
    catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
};

const userLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "All fields must be entered" });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "User not found or does not exist" });
        }


        if (user.password !== password) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        res.status(200).json({ status: "success" });
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    userRegister,
    userLogin
};
