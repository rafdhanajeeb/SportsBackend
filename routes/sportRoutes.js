const express = require('express');
const { createSport } = require('../controllers/sportController');

const router = express.Router();

// Get all users
router.post('/createSport', createSport);

// Get a user by ID
//router.get('/:id', getUserById);

module.exports = router;
