const express = require("express");
const cityRoute = express.Router();
const City = require("../Models/cityModel");


cityRoute.post("/cities", async (req, res) => {
    const { name, country, population, userId } = req.body;
    if (!userId) {
        return res.status(400).json({ error: 'userId is required' });
    }
    try {
        const city = new City({ name, country, population, userId });
        await city.save();
        return res.status(201).send(city);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

cityRoute.get('/cities', async (req, res) => {
    try {
        const cities = await City.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'cityCreatorInfo',
                },
            },
            {
                $project: {
                    name: 1,
                    country: 1,
                    population: 1,
                    userId: 1,
                    cityCreator: { $arrayElemAt: ['$cityCreatorInfo.username', 0] },
                },
            },
        ]).exec();

        res.status(201).send(cities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Get cities created by a specific user
cityRoute.get('/user/:userId/cities', (req, res) => {
    City.find({ userId: req.params.userId })
        .exec((err, cities) => {
            if (err) {
                return res.status(500).json({ error: 'Error retrieving cities' });
            }
            res.send(cities);
        });
});
module.exports = cityRoute



// {
//   "name": "Banda",
//   "country": "India",
//   "population": "1787017"
// }{
//   "name": "Banglore",
//   "country": "India",
//   "population": 78362891,
//   "userId":"647dbb11e0fc5ef084a63619"
// }