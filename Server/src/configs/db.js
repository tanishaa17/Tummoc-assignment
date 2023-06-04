const { mongoose } = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(process.env.REACT_APP_MONGODB_URI)

module.exports = { connection };