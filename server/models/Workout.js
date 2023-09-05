const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    trainingType:Map,
    bodyType:Map,
    buildExercise: Map,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User model

  });
  
  const Workout = mongoose.model('Workout', workoutSchema);
  
  module.exports = Workout;
  