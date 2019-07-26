const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Schema definitions
 */
const exerciseSchema = new Schema({
  description: { type: String, required: true },
  duration: { type: Number, require: true },
  date: { type: Date, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
    timestamps: true
  });
/**
 * Model definition.
 */
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
