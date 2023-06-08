

// Set up routes
app.get('/', async (req, res) => {
    try {
        // Perform aggregation and populate query
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

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
