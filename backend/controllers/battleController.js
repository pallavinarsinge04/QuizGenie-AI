const Battle = require("../models/Battle");

exports.createBattle = async (req, res) => {
  try {
    const battle = await Battle.create(req.body);

    res.status(201).json(battle);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getBattles = async (req, res) => {
  try {
    const battles = await Battle.find().sort({
      createdAt: -1,
    });

    res.json(battles);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateScore = async (req, res) => {
  try {
    const battle = await Battle.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(battle);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};