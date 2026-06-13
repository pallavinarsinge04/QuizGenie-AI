const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/quizController");

router.post("/", auth, controller.saveQuiz);
router.get("/", auth, controller.getQuizzes);

module.exports = router;