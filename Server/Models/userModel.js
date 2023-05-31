const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("user", UserSchema)