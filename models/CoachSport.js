const mongoose = require('mongoose');

const coachSportSchema = new mongoose.Schema(
  {
    coach_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Coach',
      required: true,
    },
    sports_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sport',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CoachSport', coachSportSchema);
