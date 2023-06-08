const express = require("express");
const cityRoute = express.Router();
const User = require('../Models/userModel')
cityRoute.get('/', async (req, res) => {
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

