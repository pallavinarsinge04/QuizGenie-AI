const StudyPlan = require("../models/StudyPlan");

exports.createPlan = async (req, res) => {
  try {
    const plan = await StudyPlan.create(req.body);

    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getPlans = async (req, res) => {
  try {
    const plans = await StudyPlan.find();

    res.json(plans);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};