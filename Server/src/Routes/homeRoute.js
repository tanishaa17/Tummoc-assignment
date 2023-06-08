const express = require("express");
const homeRoute = express.Router();

homeRoute.get("/", (req, res) => {
    res.send(`Welcome Home`);
});
module.exports = homeRoute