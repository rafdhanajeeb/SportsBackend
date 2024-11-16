const Department = require('../models/Department');

exports.createDepartment = async (req, res) => {
  try {
    const { department_name } = req.body;
    const department = new Department({ department_name });
    await department.save();
    res.status(201).json({ message: 'Department created successfully', department });
  } catch (error) {
    res.status(500).json({ message: 'Error creating department', error });
  }
};
