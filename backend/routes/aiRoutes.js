const router = require("express").Router();
const controller = require("../controllers/aiController");

router.post("/generate", controller.generateQuestions);

module.exports = router;