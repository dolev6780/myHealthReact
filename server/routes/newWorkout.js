const express = require('express');
const {createNewWorkout} = require('../controllers/newWorkout');
const router = express.Router();

router.post('/createworkout',createNewWorkout);

module.exports = router;