const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

// Get all users
router.get('/', getAllUsers);

// Get a user by ID
router.get('/:id', getUserById);

module.exports = router;



// router.get('/', (req, res) => {
//   res.send('User API is working!');
// });