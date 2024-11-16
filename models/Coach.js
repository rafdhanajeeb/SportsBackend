const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema(
  {
    coach_fname: {
      type: String,
      required: true,
    },
    coach_lname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Coach', coachSchema);
