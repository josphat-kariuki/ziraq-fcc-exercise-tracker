const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * User Schema
 */
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
}, {
    timestamps: true
  });
/**
 * User model
 */
const User = mongoose.model('User', userSchema);

module.exports = User;