const express = require("express");
const router = express.Router();
const User = require('../Models/userModel')
router.post("/register", (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    const newUser = new User({ name, email, password, confirmPassword });

    try {
        newUser.save()
        res.send(`User Registered successfully`)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

module.exports = router