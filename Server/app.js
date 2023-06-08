const express = require("express");
const { connection } = require("./src/configs/db");
const app = express();
require("dotenv").config();
const cors = require("cors");
const userRoute = require("./src/Routes/userRoute")
const homeRoute = require("./src/Routes/homeRoute");
const cityRoute = require("./src/Routes/cityRoute");
const { authenticate } = require("./src/Middlewares/auth");
const passport = require("./src/configs/passport")
app.use(express.json())
app.use(passport.initialize());

app.use(
    cors({
        origin: true,
    })
);
app.use("/", homeRoute);
app.use("/user/", userRoute);
app.use(authenticate)
app.use("/user/", cityRoute);
const port = process.env.REACT_APP_PORT || 3000;

app.listen(port, async () => {
    try {
        await connection
        console.log(`Successfully connected to DB`);
    } catch (error) {
        console.log(`Error while connecting DB : ${error}`);
    }
    console.log(`Server is running on ${port}`);
});

