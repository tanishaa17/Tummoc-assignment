const express = require("express");
const { connection } = require("./src/configs/db");
const app = express();
require("dotenv").config();
const cors = require("cors");
const userRoute = require("./src/Routes/userRoute")
const demoRoute = require("./src/Routes/demoRoute");
const { authenticate } = require("./src/Middlewares/auth");
app.use(express.json())


app.use(
    cors({
        origin: true,
    })
);
app.use("/api/user/", userRoute)
app.use("/api/user/", userRoute)
app.use(authenticate)
app.use("/api/user/", demoRoute);

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

