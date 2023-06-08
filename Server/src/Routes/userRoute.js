const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require('../Models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
require('dotenv').config()
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
                    res.status(201).send(`User Registered successfully`)
                }
            });
        }


    } catch (error) {
        return res.status(200).send({ message: "Email already exists." });
    }
})

router.post("/login", async (req, res, next) => {
    passport.authenticate('jwt', { session: false }, async (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send({ message: 'Unauthorized' });
        }

        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).send({ message: "Email doesn't exist" });
            }
            if (user.length > 0) {
                // res.send(`User logged in successfully`)
                bcrypt.compare(password, user.password).then((result) => {
                    if (result) {
                        const payload = { id: user._id };
                        const token = jwt.sign(payload, process.env.REACT_APP_SECRET_KEY);
                        res.send({ msg: `Logged in successfully`, token })
                    } else {
                        res.status(400).send({ message: `Email or password is incorrect` });
                    }
                });
            } else {
                return res.status(400).send({ message: `Email doesn't exist` });
            }
        } catch (error) {

            return res.status(500).send({ message: "Internal Server Error" });
        }
    })(req, res, next);

})

module.exports = router