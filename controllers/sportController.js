const Sport = require('../models/Sport');

exports.createSport = async (req, res) => {
  try {
    const { sports_name } = req.body;
    const sport = new Sport({ sports_name });
    await sport.save();
    res.status(201).json({ message: 'Sport created successfully', sport });
  } catch (error) {
    res.status(500).json({ message: 'Error creating sport', error });
  }
};
