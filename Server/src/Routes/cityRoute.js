const express = require("express");
const cityRoute = express.Router();
const User = require('../Models/userModel');
const City = require("../Models/cityModel");

cityRoute.post("/cities", async (req, res) => {
    const { name, country, population, user } = req.body
    try {
        const city = new City({ name, country, population, user })
        await city.save();
        res.status(201).send(city);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

cityRoute.get('/cities', async (req, res) => {
    try {
        // Aggregation and populate query
        const users = await User.aggregate([
            {
                $lookup: {
                    from: 'cities',
                    localField: '_id',
                    foreignField: 'user',
                    as: 'cities',
                },
            },
        ]).exec();

        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = cityRoute



// {
//   "name": "Banda",
//   "country": "India",
//   "population": "1787017"
// }