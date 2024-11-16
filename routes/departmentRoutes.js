const express = require('express');
const { createDepartment } = require('../controllers/departmentController');

const router = express.Router();

// Get all users
router.post('/createDepartment', createDepartment);

// Get a user by ID
//router.get('/:id', getUserById);

module.exports = router;
