const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    email_verified_at: {
      type: Date,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    remember_token: {
      type: String,
    },
    department_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      default: null,
    },
    sports_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sport',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
