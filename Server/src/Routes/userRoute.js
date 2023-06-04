const express = require("express");
const router = express.Router();
const User = require('../Models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // To check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "Email already exists." });
        } else {
            bcrypt.hash(password, 6, async (err, hashedPassword) => {
                // Store hash in your password DB.
                if (err) {
                    console.log(err);
                } else {
                    const newUser = new User({ name, email, password: hashedPassword });// USING HASHED PASSWORD FOR REGISTERING
                    await newUser.save()
                    res.send(`User Registered successfully`)
                }
            });
        }


    } catch (error) {
        return res.status(400).send({ message: error });
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.find({ email });
        if (user.length > 0) {
            // res.send(`User logged in successfully`)
            bcrypt.compare(password, user[0].password).then((result) => {
                if (result) {
                    const token = jwt.sign({ foo: 'bar' }, process.env.REACT_APP_SECRET_KEY);
                    res.send({ msg: `Logged in successfully`, token })
                } else {
                    res.status(400).send({ message: `Email or password is incorrect` });
                }
            });
        } else {
            return res.status(400).send({ message: `Email doesn't exist` });
        }
    } catch (error) {

        return res.status(400).send(error);
    }
})

module.exports = router