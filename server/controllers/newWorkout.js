const Workout = require('../models/Workout');
const User = require('../models/User');
const createNewWorkout = async (req, res) => {
  try {
    const { trainingType, bodyType, buildExercise, userId } = req.body; // Include userId in the request body

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create a new workout associated with the user
    const newWorkout = new Workout({
      trainingType,
      bodyType,
      buildExercise,
      user: user._id // Associate the workout with the user
    });

    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createNewWorkout };