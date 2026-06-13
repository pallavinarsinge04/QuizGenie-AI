const router = require("express").Router();
const { generateQuestions } = require("../controllers/aiController");

router.post("/generate", generateQuestions);

module.exports = router;