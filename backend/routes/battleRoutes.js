const express = require("express");

const router = express.Router();

const {
  createBattle,
  getBattles,
  updateScore,
} = require("../controllers/battleController");

router.post("/", createBattle);

router.get("/", getBattles);

router.put("/:id", updateScore);

module.exports = router;