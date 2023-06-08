const mongoose = require("mongoose");
const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    population: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("city", citySchema)