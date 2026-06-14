const express = require("express");

const router = express.Router();

const {
  createPlan,
  getPlans,
} = require("../controllers/studyController");

router.post("/", createPlan);

router.get("/", getPlans);

module.exports = router;