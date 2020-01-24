const router = require("express").Router();
const workout = require("./../models/workout");

// Add a new workout
router.post("/api/workouts", (req, res) => {
  workout
    .create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// add exercises to a work out
// put route /api/workouts/:id

// delete workout
// /api/workouts

// get all workouts
// /api/workouts

// get last 7 workouts
// Status page
// use fetch
// /api/workouts/range

module.exports = router;
