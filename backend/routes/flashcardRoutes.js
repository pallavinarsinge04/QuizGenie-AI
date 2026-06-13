const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/flashcardController");

router.post("/", auth, controller.create);
router.get("/", auth, controller.getAll);
router.put("/:id", auth, controller.update);
router.delete("/:id", auth, controller.remove);

module.exports = router;