require('../models/user');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const userRegister = async (req, res) => {
    const { firstName, lastName, username, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: "Please fill in all required fields." });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "The passwords you entered do not match." });
    }

    if (password.length < 7) {
        return res.status(400).json({ error: "Your password must be at least 7 characters long." });
    }

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "This username is already taken." });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "This email address is already in use." });
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
    } catch (err) {
        return res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
};

const userLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Please enter both username and password." });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "We couldn't find an account with that username." });
        }

        if (user.password !== password) {
            return res.status(400).json({ error: "The password you entered is incorrect." });
        }

        return res.status(200).json({ status: "success" });
    } catch (err) {
        return res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
};

module.exports = {
    userRegister,
    userLogin
};
