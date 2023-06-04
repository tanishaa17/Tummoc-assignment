const express = require("express");
const demo = express.Router();

demo.get("/demo", (req, res) => {
    res.send(`Demo Successful`);
});
module.exports = demo