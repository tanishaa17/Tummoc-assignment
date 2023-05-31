const express = require("express");
const { connection } = require("./configs/db");
const app = express();
require("dotenv").config();
// app.use();

const port = process.env.REACT_APP_PORT || 3000;

app.listen(port, async () => {
    try {
        await connection
        console.log(`Successfully connected to DB`);
    } catch (error) {
        console.log(`Error while connecting DB : ${error}`);
    }
    console.log(`Server is running on ${port}`);
})